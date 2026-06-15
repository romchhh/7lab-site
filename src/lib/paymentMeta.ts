export type PaymentCustomerData = {
  name: string
  phone: string
  telegram: string
}

const META_PREFIX = '__RA__'

export function encodePaymentMeta(data: PaymentCustomerData): string {
  return `${META_PREFIX}${JSON.stringify(data)}`
}

export function decodePaymentMeta(comment?: string): PaymentCustomerData | null {
  if (!comment?.startsWith(META_PREFIX)) return null

  try {
    const parsed = JSON.parse(comment.slice(META_PREFIX.length)) as Partial<PaymentCustomerData>
    if (!parsed.name || typeof parsed.name !== 'string') return null

    return {
      name: parsed.name,
      phone: typeof parsed.phone === 'string' ? parsed.phone : '',
      telegram: typeof parsed.telegram === 'string' ? parsed.telegram : '',
    }
  } catch {
    return null
  }
}
