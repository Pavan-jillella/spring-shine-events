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

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Contact Form (Important!)

The contact form requires email configuration. Follow these steps:

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Configure your email settings in `.env.local`:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   COMPANY_EMAIL=info@springshine.com
   ```

3. **For Gmail users:**
   - Enable 2-Step Verification in your Google Account
   - Generate an App Password at https://myaccount.google.com/apppasswords
   - Use the 16-character app password in `.env.local`

📖 **Detailed setup guide**: See [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md)

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
spring_shine_events/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts  # Contact form API endpoint
│   ├── events/           # Individual event pages
│   │   ├── weddings/
│   │   ├── corporate/
│   │   ├── birthday/
│   │   └── social/
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
│   ├── Contact.tsx       # Contact form with backend
│   └── Footer.tsx        # Footer with links
├── public/               # Static assets
├── .env.local            # Environment variables (not in Git)
├── .env.example          # Environment template
└── CONTACT_FORM_SETUP.md # Email setup guide
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
- **Nodemailer**: Email sending functionality
- **Next.js API Routes**: Backend API for form handling

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Add contact form backend"
   git push
   ```

2. **Deploy on Vercel**:
   - Visit [vercel.com](https://vercel.com) and sign in
   - Import your GitHub repository
   - Add environment variables:
     - `EMAIL_USER`
     - `EMAIL_PASSWORD`
     - `COMPANY_EMAIL`
   - Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

You can also deploy to Netlify, AWS, or Digital Ocean. Remember to:
- Set up environment variables in your hosting platform
- Configure build command: `npm run build`
- Set output directory: `.next`

## 📝 To-Do

- [ ] Add actual event images to gallery
- [x] ~~Integrate with a backend for form submissions~~ ✅ **Done!**
- [ ] Add blog section for event tips
- [ ] Implement CMS for easy content management
- [ ] Add animations library (Framer Motion)
- [x] ~~SEO optimization with metadata~~ ✅ **Done!**
- [ ] Add Google Analytics
- [ ] Configure production email credentials

## 📄 License

This project is created for Spring Shine Events.

## 🤝 Support

For support or inquiries, contact: info@springshine.com

---

Built with ❤️ by Spring Shine Team

