# Next.js Items Grid

## About

This is a demo application showcasing a grid of items with the following main features:

- **Sticky Header:** The header moves up when a user scrolls down and reappears when the page is scrolled up.
- **Item Loading:** Items are loaded using a custom `useFetch` hook implementation.
- **Page Refresh:** Users can refresh the page.
- **Error Handling:** In case of an error on the backend, the front-end displays a warning message.
- **Error Generation:** The server generates errors with a low probability, useful for testing error handling.
- **Price Formatting:** Prices of items are formatted using a custom Price formatter function.
- **GitHub Pipelines Integration:** This project integrates with GitHub pipelines.

## Demo

![Demo](/demo.png)

### [Live Demo](https://andersdeath.github.io/nextjs-items-grid/)

---

## Development

### Getting Started

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the result. You can begin editing the page by modifying `app/page.tsx`. The page auto-updates as you make changes.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, explore the following resources:

- [Next.js Documentation](https://nextjs.org/docs): Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn): An interactive Next.js tutorial.
