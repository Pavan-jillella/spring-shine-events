import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Verify environment variables are loaded
console.log('🔧 Email Config Check:', {
  emailUser: process.env.EMAIL_USER ? '✅ Set' : '❌ Missing',
  emailPassword: process.env.EMAIL_PASSWORD ? '✅ Set' : '❌ Missing',
  companyEmail: process.env.COMPANY_EMAIL ? '✅ Set' : '❌ Missing',
});

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'outlook', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASSWORD, // Your email app password
  },
});

// Alternative configuration for custom SMTP
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: parseInt(process.env.SMTP_PORT || '587'),
//   secure: process.env.SMTP_SECURE === 'true',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  guests: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.eventType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Email to company
    const companyMailOptions = {
      from: {
        name: 'Spring Shine Events',
        address: process.env.EMAIL_USER || '',
      },
      to: process.env.COMPANY_EMAIL || process.env.EMAIL_USER,
      subject: `🎉 New Event Inquiry - ${body.eventType} from ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff; }
            .logo-header { background: #ffffff; padding: 20px; text-align: center; border-bottom: 3px solid #f472b6; }
            .logo-img { max-width: 250px; height: auto; }
            .header { background: linear-gradient(135deg, #f472b6 0%, #fb7185 100%); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .header p { margin: 10px 0 0 0; font-style: italic; opacity: 0.9; }
            .content { background: #f9f9f9; padding: 30px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #f472b6; margin-bottom: 5px; }
            .field-value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #f472b6; }
            .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; background: #f9f9f9; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo-header">
              <img src="cid:logo" alt="Spring Shine Events" class="logo-img" />
            </div>
            <div class="header">
              <h1>New Event Inquiry</h1>
              <p>we make you celebrate</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${body.name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">${body.email}</div>
              </div>
              <div class="field">
                <div class="field-label">Phone:</div>
                <div class="field-value">${body.phone}</div>
              </div>
              <div class="field">
                <div class="field-label">Event Type:</div>
                <div class="field-value">${body.eventType}</div>
              </div>
              ${body.date ? `
              <div class="field">
                <div class="field-label">Event Date:</div>
                <div class="field-value">${body.date}</div>
              </div>
              ` : ''}
              ${body.guests ? `
              <div class="field">
                <div class="field-label">Number of Guests:</div>
                <div class="field-value">${body.guests}</div>
              </div>
              ` : ''}
              ${body.message ? `
              <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value">${body.message}</div>
              </div>
              ` : ''}
            </div>
            <div class="footer">
              <p><strong>Spring Shine Events</strong></p>
              <p style="font-style: italic; color: #f472b6;">we make you celebrate</p>
              <p>This inquiry was submitted through our website</p>
              <p>Please respond within 24 hours</p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: 'spring-shine-logo.png',
          path: './public/spring-shine-logo.png',
          cid: 'logo' // Referenced in the HTML as cid:logo
        }
      ]
    };

    // Auto-reply email to customer
    const customerMailOptions = {
      from: {
        name: 'Spring Shine Events',
        address: process.env.EMAIL_USER || '',
      },
      to: body.email,
      subject: '🎉 Thank You for Contacting Spring Shine Events!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff; }
            .logo-header { background: #ffffff; padding: 20px; text-align: center; border-bottom: 3px solid #f472b6; }
            .logo-img { max-width: 250px; height: auto; }
            .header { background: linear-gradient(135deg, #f472b6 0%, #fb7185 100%); color: white; padding: 30px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .tagline { font-style: italic; font-size: 18px; opacity: 0.9; margin-top: 10px; }
            .content { background: #f9f9f9; padding: 30px; }
            .message { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #f472b6; }
            .details { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
            .contact-info { margin-top: 20px; background: white; padding: 20px; border-radius: 8px; }
            .contact-info h3 { color: #f472b6; margin-top: 0; }
            .footer { text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px; background: #f9f9f9; }
            .footer .brand { font-weight: bold; color: #f472b6; font-size: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo-header">
              <img src="cid:logo" alt="Spring Shine Events" class="logo-img" />
            </div>
            <div class="header">
              <h1>Thank You!</h1>
              <div class="tagline">we make you celebrate</div>
            </div>
            <div class="content">
              <h2 style="color: #f472b6;">Dear ${body.name},</h2>
              <div class="message">
                <p>We've received your inquiry and are excited to help make your ${body.eventType} event absolutely spectacular!</p>
                <p>Our team will review your requirements and get back to you within 24 hours.</p>
              </div>
              
              <div class="details">
                <h3 style="color: #f472b6;">Your Inquiry Details:</h3>
                <p><strong>Event Type:</strong> ${body.eventType}</p>
                ${body.date ? `<p><strong>Date:</strong> ${body.date}</p>` : ''}
                ${body.guests ? `<p><strong>Guests:</strong> ${body.guests}</p>` : ''}
              </div>

              <div class="contact-info">
                <h3>In the meantime, feel free to reach us:</h3>
                <p>📞 <strong>Phone:</strong> +1 (410) 736-0765</p>
                <p>📧 <strong>Email:</strong> udayreddy416@gmail.com</p>
                <p>💬 <strong>WhatsApp:</strong> <a href="https://wa.me/14107360765" style="color: #f472b6; text-decoration: none;">Click to Chat</a></p>
              </div>
            </div>
            
            <div class="footer">
              <div class="brand">Spring Shine Events</div>
              <p style="font-style: italic; color: #f472b6; margin: 5px 0;">we make you celebrate</p>
              <p style="margin-top: 15px;">Follow us on social media for inspiration and updates!</p>
              <p style="margin-top: 10px;">
                <a href="#" style="color: #f472b6; margin: 0 10px; text-decoration: none;">Facebook</a> |
                <a href="#" style="color: #f472b6; margin: 0 10px; text-decoration: none;">Instagram</a> |
                <a href="#" style="color: #f472b6; margin: 0 10px; text-decoration: none;">Twitter</a>
              </p>
              <p style="margin-top: 15px;">&copy; 2026 Spring Shine Events. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: 'spring-shine-logo.png',
          path: './public/spring-shine-logo.png',
          cid: 'logo' // Referenced in the HTML as cid:logo
        }
      ]
    };

    // Send emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your inquiry has been sent successfully! We\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error sending email:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    // Check if it's an authentication error
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const isAuthError = errorMessage.toLowerCase().includes('auth') || 
                        errorMessage.toLowerCase().includes('authentication') ||
                        errorMessage.toLowerCase().includes('username') ||
                        errorMessage.toLowerCase().includes('password');
    
    return NextResponse.json(
      { 
        error: isAuthError 
          ? 'Email authentication failed. Please check your email credentials in .env.local'
          : 'Failed to send message. Please try again or contact us directly.',
        details: errorMessage,
        hint: isAuthError 
          ? 'Make sure you are using a Gmail App Password, not your regular password'
          : 'Check the server console for more details'
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { message: 'This endpoint only accepts POST requests' },
    { status: 405 }
  );
}
