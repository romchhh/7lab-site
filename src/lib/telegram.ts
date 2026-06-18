function getTelegramConfig() {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    throw new Error('Telegram is not configured')
  }

  return { token, chatId }
}

async function sendTelegramMessage(text: string): Promise<void> {
  const { token, chatId } = getTelegramConfig()

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  })

  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    throw new Error(`Telegram API error: ${JSON.stringify(data)}`)
  }
}

export type ContactFormData = {
  name: string
  phone: string
  comment: string
}

export async function sendContactNotification(data: ContactFormData): Promise<void> {
  const lines = [
    '📩 <b>Нова заявка з сайту 7ЛАБ</b>',
    '',
    `👤 <b>Ім'я:</b> ${escapeHtml(data.name)}`,
    `📞 <b>Телефон:</b> ${escapeHtml(data.phone)}`,
  ]

  if (data.comment.trim()) {
    lines.push(`💬 <b>Коментар:</b> ${escapeHtml(data.comment)}`)
  }

  await sendTelegramMessage(lines.join('\n'))
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}
