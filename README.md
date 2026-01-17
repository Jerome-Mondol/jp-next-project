# Jerome-Mondol Next.js Project

A simple e-commerce application built with Next.js 15/16 using the App Router. The application includes public pages for browsing items and protected pages for adding items, with basic authentication.

## Technologies Used
- Next.js 15/16 (App Router)
- React
- Tailwind CSS
- Express.js (for API)
- JavaScript (JSX, no TypeScript)

## Setup & Installation Instructions

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd jp-next-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Route Summary
- `/` - Landing Page
- `/login` - Login Page
- `/items` - Item List Page
- `/items/[id]` - Item Details Page
- `/add-item` - Add Item Page (Protected)

## Implemented Features
- Landing Page with 7 sections, Navbar, and Footer
- Mock Authentication with cookie storage
- Item List Page fetching from Express API
- Item Details Page
- Protected Add Item Page
- Toast notifications (optional)

## Brief Explanation of Features
- **Landing Page**: Public page with navigation to login and items.
- **Authentication**: Hardcoded email/password login, stores in cookies, redirects to items on success.
- **Item List**: Displays items from API with name, description, price, image.
- **Item Details**: Shows full details of a selected item.
- **Add Item**: Form to add new items, stored via API, requires login.

## Deployment
Deploy on Vercel for the live site.

## Login Credentials
- Email: admin@example.com
- Password: password123

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
