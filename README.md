# Kwale Tech Hub Website

A modern corporate website built with Next.js, TypeScript, Tailwind CSS, and DaisyUI for Kwale Tech Hub - an innovation and technology hub driving digital transformation in Kwale County.

## 🚀 Features

- **Modern Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Theme Support**: Light mode (winter theme) and dark mode (sunset theme) with persistent switching
- **Responsive Design**: Mobile-first approach with DaisyUI components
- **Performance Optimized**: Static generation and optimized builds
- **Accessibility**: Semantic HTML and proper ARIA labels
- **SEO Ready**: Meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + DaisyUI
- **Themes**: 
  - Light: Winter theme
  - Dark: Sunset theme
- **Icons**: Heroicons (embedded SVG)
- **Linting**: ESLint with Next.js config

## 📦 Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 🎨 Theme Configuration

The project uses DaisyUI themes configured in `tailwind.config.ts`:

- **Light Mode**: `winter` theme - clean and professional
- **Dark Mode**: `sunset` theme - warm and modern

### Theme Classes

Use DaisyUI's semantic color classes:
- `bg-base-100`, `bg-base-200`, `bg-base-300` for backgrounds
- `text-base-content` for main text
- `text-primary`, `text-secondary` for accent colors
- `btn-primary`, `btn-secondary` for buttons

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Home page
└── components/
    ├── ThemeProvider.tsx    # Theme context and persistence
    └── ThemeToggle.tsx      # Theme switching button
```

## 🎯 Development Guidelines

1. **TypeScript**: Use TypeScript for all components and utilities
2. **Components**: Follow React best practices with proper typing
3. **Styling**: Use DaisyUI classes and Tailwind utilities
4. **Themes**: Ensure all components work in both light and dark modes
5. **Accessibility**: Include proper ARIA labels and semantic HTML
6. **Performance**: Optimize images and use Next.js features

## 🌐 Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## 📄 License

This project is created for Kwale Tech Hub. All rights reserved.

## 🤝 Contributing

1. Follow the coding standards
2. Test in both light and dark themes
3. Ensure mobile responsiveness
4. Update documentation as needed

---

Built with ❤️ for Kwale Tech Hub# Kwale_Tech_Hub
