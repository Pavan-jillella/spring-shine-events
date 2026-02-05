# Contact Form Backend Setup Guide

This guide will help you configure the email functionality for the Spring Shine Events contact form.

## Overview

The contact form uses:
- **Next.js API Routes** for backend handling
- **Nodemailer** for sending emails
- **Gmail SMTP** (or any other email service)

## Setup Steps

### 1. Install Dependencies ✅ (Already Done)

The required packages are already installed:
```bash
npm install nodemailer @types/nodemailer
```

### 2. Configure Email Service

You have two options:

#### Option A: Using Gmail (Recommended for Testing)

1. **Create/Use a Gmail Account**
   - Use your existing Gmail or create a new one for the business

2. **Enable 2-Step Verification**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

3. **Generate App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Name it "Spring Shine Events"
   - Copy the generated 16-character password

4. **Update `.env.local` file**
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx  # Your 16-character app password
   COMPANY_EMAIL=info@springshine.com  # Where you want to receive inquiries
   ```

#### Option B: Using Custom SMTP Server

If you have a business email (e.g., info@springshine.com):

1. **Get SMTP Settings from your email provider**
   - Common providers:
     - **Google Workspace**: smtp.gmail.com, port 587
     - **Outlook/Office 365**: smtp.office365.com, port 587
     - **Yahoo**: smtp.mail.yahoo.com, port 587
     - **Custom Domain**: Contact your hosting provider

2. **Update `.env.local` file**
   ```env
   EMAIL_USER=info@springshine.com
   EMAIL_PASSWORD=your-email-password
   COMPANY_EMAIL=info@springshine.com
   
   # Uncomment and configure if using custom SMTP
   # SMTP_HOST=smtp.yourdomain.com
   # SMTP_PORT=587
   # SMTP_SECURE=false
   ```

3. **Update API route** (if using custom SMTP)
   - Open `app/api/contact/route.ts`
   - Uncomment the alternative SMTP configuration
   - Comment out the Gmail configuration

### 3. Update Contact Information

Edit `components/Contact.tsx` to update your business details:
- Phone number (line ~219)
- Email address (line ~234)
- Physical address (line ~207)
- WhatsApp number (line ~258)

### 4. Test the Contact Form

1. **Start the development server** (if not running):
   ```bash
   npm run dev
   ```

2. **Navigate to the contact section**:
   - Go to http://localhost:3000/#contact

3. **Submit a test form**:
   - Fill in all required fields
   - Click "Send Message"
   - Check for success message
   - Verify emails were received

### 5. Security Best Practices

✅ **Never commit `.env.local` to Git** - Already in `.gitignore`

✅ **Use App Passwords** - Not your actual Gmail password

✅ **For Production**: Use environment variables in your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables

### 6. Deployment Configuration

When deploying to Vercel/Netlify:

1. **Add Environment Variables** in your hosting dashboard:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   COMPANY_EMAIL=info@springshine.com
   ```

2. **Deploy**:
   ```bash
   # Vercel
   vercel deploy

   # Or push to GitHub (auto-deploys if connected)
   git add .
   git commit -m "Add contact form backend"
   git push
   ```

## How It Works

### User Flow:
1. User fills out contact form
2. Click "Send Message" → Shows loading spinner
3. Form data sent to `/api/contact` endpoint
4. Two emails sent simultaneously:
   - **To Company**: Inquiry details with formatted HTML
   - **To Customer**: Auto-reply confirmation

### Email Templates:

**Company Email** includes:
- Customer contact information
- Event type and details
- Date and guest count
- Custom message
- Formatted HTML design

**Customer Email** includes:
- Thank you message
- Inquiry confirmation
- Event details recap
- Company contact info
- Call-to-action links

## Troubleshooting

### Error: "Cannot send email"

**Solutions:**
1. Check `.env.local` file exists with correct credentials
2. Verify App Password is correct (no spaces)
3. Check Gmail 2-Step Verification is enabled
4. Restart development server after changing `.env.local`

### Error: "Invalid email format"

**Solution:** Ensure email validation regex is working correctly

### Emails not receiving

**Check:**
1. Spam/Junk folder
2. Email credentials in `.env.local`
3. Console logs for error messages
4. Network tab in browser DevTools

### SMTP Connection errors

**Solutions:**
1. Check firewall/antivirus settings
2. Verify SMTP port (587 for TLS, 465 for SSL)
3. Check SMTP host is correct
4. Ensure email provider allows SMTP access

## Alternative Solutions

If you prefer not to use Nodemailer, consider these services:

### 1. **EmailJS** (No Backend Required)
- Free tier: 200 emails/month
- [Setup Guide](https://www.emailjs.com/docs/)

### 2. **Formspree** (Hosted Backend)
- Free tier: 50 submissions/month
- [Setup Guide](https://formspree.io/docs/)

### 3. **SendGrid** (Enterprise Grade)
- Free tier: 100 emails/day
- [Setup Guide](https://docs.sendgrid.com/)

### 4. **Resend** (Modern Alternative)
- Free tier: 3,000 emails/month
- Great developer experience
- [Setup Guide](https://resend.com/docs)

## Files Structure

```
spring_shine_events/
├── app/
│   └── api/
│       └── contact/
│           └── route.ts          # Email API endpoint
├── components/
│   └── Contact.tsx               # Contact form component
├── .env.local                    # Email credentials (not in Git)
└── CONTACT_FORM_SETUP.md        # This file
```

## Support

For issues or questions:
- Check console logs for detailed error messages
- Review Next.js API routes documentation
- Check Nodemailer documentation
- Verify email service provider settings

## Next Steps

1. ✅ Configure `.env.local` with your email credentials
2. ✅ Test the contact form locally
3. ✅ Update business contact information
4. ✅ Add environment variables to hosting platform
5. ✅ Deploy and test in production

---

**Note**: Remember to replace placeholder contact information (phone, email, address) with your actual business details before going live!
