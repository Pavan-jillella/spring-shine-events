# Spring Shine 🎉
*we make you celebrate*

A modern, dynamic event management website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Beautiful gradient-based UI with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dynamic Components**: Interactive hero slider, gallery filters, and testimonials carousel
- **Multiple Sections**:
  - Hero section with animated backgrounds
  - About Us with company highlights
  - Services showcase with detailed information
  - Animated statistics counter
  - Filterable gallery
  - Client testimonials carousel
  - Contact form with WhatsApp integration
  - Social media links

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
spring_shine_events/
├── app/
│   ├── layout.tsx        # Root layout with Navbar and Footer
│   ├── page.tsx          # Homepage with all sections
│   └── globals.css       # Global styles and animations
├── components/
│   ├── Navbar.tsx        # Navigation bar with smooth scrolling
│   ├── Hero.tsx          # Hero section with slider
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services showcase
│   ├── Stats.tsx         # Animated statistics
│   ├── Gallery.tsx       # Filterable gallery
│   ├── Testimonials.tsx  # Client testimonials
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer with links
└── public/               # Static assets

```

## 🎨 Customization

### Colors
The website uses a vibrant spring-themed color palette with gradients:
- Primary: Pink to Purple (`from-pink-500 to-purple-600`)
- Accents: Orange, Yellow, Blue variations

### Content
To update content:
1. **Services**: Edit the `services` array in `components/Services.tsx`
2. **Testimonials**: Update `testimonials` array in `components/Testimonials.tsx`
3. **Gallery**: Modify `galleryItems` in `components/Gallery.tsx`
4. **Contact Info**: Update details in `components/Contact.tsx`

### Images
Replace placeholder gradients in the Gallery component with actual event photos:
- Add images to the `public/` folder
- Update the gallery items with image paths

## 🛠️ Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: Modern React patterns

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use other platforms like Netlify, AWS, or Digital Ocean.

## 📝 To-Do

- [ ] Add actual event images to gallery
- [ ] Integrate with a backend for form submissions
- [ ] Add blog section for event tips
- [ ] Implement CMS for easy content management
- [ ] Add animations library (Framer Motion)
- [ ] SEO optimization with metadata
- [ ] Add Google Analytics

## 📄 License

This project is created for Spring Shine Events.

## 🤝 Support

For support or inquiries, contact: info@springshine.com

---

Built with ❤️ by Spring Shine Team

