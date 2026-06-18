# 7ЛАБ — сайт лабораторії

Лендінг лабораторії **7ЛАБ** на Next.js 14 + TypeScript + CSS Modules.

## Запуск

```bash
npm install
cp .env.example .env.local
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000)

## Структура

- `src/app/site.ts` — контент, навігація, константи
- `src/app/brand.css` — брендові токени та глобальні стилі сторінки
- `src/app/components/sections.module.css` — спільні стилі секцій
- `src/app/components/HomeSections.tsx` — основні блоки головної сторінки
