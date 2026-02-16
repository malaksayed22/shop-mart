# ShopMart - Next.js E-Commerce Application

A modern, full-featured e-commerce application built with Next.js 16, TypeScript, and Tailwind CSS.

## ✨ Features

- 🛍️ **Product Catalog** - Browse products by categories and brands
- 🛒 **Shopping Cart** - Add/remove items, update quantities, apply coupons
- ❤️ **Wishlist** - Save favorite products
- 🔐 **Authentication** - Secure login/register with NextAuth
- 📦 **Order Management** - Track orders and view order history
- 💳 **Multiple Payment Methods** - Cash on delivery & online payment
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **React Server Components** - Optimized performance
- 🎨 **Modern UI** - Built with Radix UI and Tailwind CSS

## 🚀 Tech Stack

- **Framework:** Next.js 16.1.6
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **Authentication:** NextAuth.js
- **Form Handling:** React Hook Form + Zod
- **State Management:** React Hooks + Server Actions
- **Notifications:** Sonner

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- npm/yarn/pnpm

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd shop-mart
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and update with your values.

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── actions/          # Server actions
├── app/             # App router pages
│   ├── (pages)/    # Route groups
│   └── api/        # API routes
├── components/      # React components
├── Interfaces/      # TypeScript interfaces
├── lib/            # Utility functions
└── types/          # Type definitions
```

## 🔑 Environment Variables

See `.env.example` for required environment variables.

## 🛠️ Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Features in Detail

### Authentication

- Login/Register with email & password
- Password reset functionality
- Protected routes middleware
- Session management

### Shopping Experience

- Product listing with filters
- Product details page
- Add to cart/wishlist
- Cart management (update quantities, remove items)
- Coupon code support

### Checkout & Orders

- Shipping address form
- Cash on delivery option
- Online payment integration
- Order history tracking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)
