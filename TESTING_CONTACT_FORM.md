# Testing the Contact Form

## Quick Test Guide

### Before Testing

1. **Ensure environment variables are set** in `.env.local`:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   COMPANY_EMAIL=info@springshine.com
   ```

2. **Restart the development server** if it was already running:
   ```bash
   # Stop the server (Ctrl+C) and restart:
   npm run dev
   ```

### Testing Steps

1. **Open the website**:
   - Navigate to http://localhost:3000
   - Scroll down to the Contact section or click "Contact" in the navbar

2. **Fill out the form**:
   - **Name**: John Doe
   - **Email**: your-test-email@gmail.com (use a real email you can check)
   - **Phone**: +1 234 567 8900
   - **Event Type**: Wedding
   - **Event Date**: Select any future date
   - **Number of Guests**: 150
   - **Message**: "I would like to plan a beautiful spring wedding"

3. **Submit the form**:
   - Click "Send Message"
   - You should see:
     - Loading spinner with "Sending..." text
     - After 2-3 seconds, green success message
     - Form fields should clear

4. **Check emails**:
   
   **Company Email** (EMAIL_USER or COMPANY_EMAIL):
   - Subject: "New Event Inquiry - Wedding from John Doe"
   - Should contain all form details in a nicely formatted HTML email
   - Pink gradient header with Spring Shine branding
   
   **Customer Email** (the email you entered in the form):
   - Subject: "Thank You for Contacting Spring Shine Events!"
   - Should contain:
     - Thank you message
     - Confirmation of inquiry details
     - Company contact information
     - Call-to-action links

### Expected Results

✅ **Success Case:**
- Form shows loading state
- Success message appears after submission
- Two emails sent (company + customer)
- Form resets automatically
- Success message disappears after 5 seconds

❌ **Error Cases to Test:**

1. **Missing required fields**:
   - Try submitting without name/email/phone/event type
   - Should show browser validation errors

2. **Invalid email format**:
   - Enter "notanemail" in email field
   - Should show "Invalid email format" error

3. **Network error** (simulate by turning off WiFi):
   - Should show "Failed to send message" error
   - Error message in red box

### Browser Console Checks

Open DevTools (F12) and check:

1. **Network Tab**:
   - POST request to `/api/contact`
   - Status: 200 OK (success)
   - Response: `{ success: true, message: "..." }`

2. **Console Tab**:
   - No error messages
   - If errors appear, check:
     - Environment variables are set
     - Development server was restarted
     - Email credentials are correct

### Common Issues & Solutions

#### Issue: "Cannot send email" error

**Solutions:**
```bash
# 1. Check if .env.local exists
ls -la .env.local

# 2. Restart dev server
npm run dev

# 3. Check environment variables are loaded
# Add this temporarily to app/api/contact/route.ts (line 4):
console.log('Email configured:', process.env.EMAIL_USER ? 'Yes' : 'No');
```

#### Issue: Emails going to spam

**Solutions:**
- Check spam/junk folder
- Mark as "Not Spam"
- For production, use a verified domain email
- Consider using SendGrid/Mailgun for production

#### Issue: "Auth failed" error

**Solutions:**
- Verify you're using App Password, not regular Gmail password
- Ensure 2-Step Verification is enabled on Gmail
- Double-check no spaces in the password

### Production Testing Checklist

Before deploying:

- [ ] Test with real company email
- [ ] Test from multiple devices (mobile, tablet, desktop)
- [ ] Test with different email providers (Gmail, Outlook, Yahoo)
- [ ] Verify emails don't go to spam
- [ ] Check all links in emails work
- [ ] Update WhatsApp number to real number
- [ ] Update contact information (phone, address, email)
- [ ] Test error handling (wrong credentials)
- [ ] Load test: Submit multiple forms quickly

### Monitoring in Production

After deployment:

1. **Check Email Delivery**:
   - Monitor bounce rates
   - Check spam complaints
   - Verify delivery time (should be < 5 seconds)

2. **Check Form Analytics**:
   - Track submission success rate
   - Monitor error rates
   - Check user drop-off points

3. **Set Up Alerts**:
   - Email notifications for form errors
   - Monitor API endpoint uptime
   - Track email quota (if using free tier)

### Alternative: Test with Console Logging

If you don't want to set up email immediately, you can test the API route with console logging:

**Temporary modification** to `app/api/contact/route.ts`:

```typescript
// Comment out the email sending lines (around line 125-126):
// await transporter.sendMail(companyMailOptions);
// await transporter.sendMail(customerMailOptions);

// Add console logs instead:
console.log('Would send company email:', companyMailOptions);
console.log('Would send customer email:', customerMailOptions);
```

This will log the email content without actually sending them.

---

**Ready to test?** Follow the steps above and verify everything works! 🎉
