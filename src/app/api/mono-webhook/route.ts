import { NextRequest, NextResponse } from 'next/server'
import {
  fetchMonoInvoiceStatus,
  fetchMonoPublicKey,
  verifyMonoWebhookSignature,
  type MonoWebhookPayload,
} from '@/lib/mono'
import { decodePaymentMeta } from '@/lib/paymentMeta'
import { sendPaymentNotification } from '@/lib/telegram'
import { MARATHON_PRICE } from '@/app/site'

function getCustomerFromPayload(payload: MonoWebhookPayload) {
  return decodePaymentMeta(payload.merchantPaymInfo?.comment)
}

export async function POST(req: NextRequest) {
  try {
    const monoToken = process.env.MONO_TOKEN
    if (!monoToken) {
      return NextResponse.json({ error: 'Not configured' }, { status: 500 })
    }

    const rawBody = await req.text()
    const signature = req.headers.get('x-sign') ?? ''

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    const publicKey = await fetchMonoPublicKey(monoToken)
    const isValid = verifyMonoWebhookSignature(publicKey, Buffer.from(rawBody), signature)

    if (!isValid) {
      console.error('[mono-webhook] Invalid signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const payload = JSON.parse(rawBody) as MonoWebhookPayload
    const { invoiceId, status } = payload

    if (!invoiceId) {
      return NextResponse.json({ ok: true })
    }

    if (status === 'success') {
      let customer = getCustomerFromPayload(payload)

      if (!customer) {
        try {
          const invoice = await fetchMonoInvoiceStatus(monoToken, invoiceId)
          customer = getCustomerFromPayload(invoice)
        } catch (error) {
          console.error('[mono-webhook] Failed to fetch invoice status:', error)
        }
      }

      const reference =
        payload.reference ??
        payload.merchantPaymInfo?.reference ??
        invoiceId

      try {
        await sendPaymentNotification({
          name: customer?.name ?? 'Не вказано',
          phone: customer?.phone || '—',
          telegram: customer?.telegram || '',
          amount: payload.amount ? payload.amount / 100 : MARATHON_PRICE,
          invoiceId,
          reference,
        })
      } catch (error) {
        console.error('[mono-webhook] Telegram notification failed:', error)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('[mono-webhook]', error)
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 })
  }
}
