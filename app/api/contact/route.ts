import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL || process.env.EMAIL_USER,
      subject: `New Event Inquiry - ${body.eventType} from ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f472b6 0%, #fb7185 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #f472b6; margin-bottom: 5px; }
            .field-value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #f472b6; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Event Inquiry</h1>
              <p>Spring Shine Events</p>
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
              <div class="footer">
                <p>This inquiry was submitted through Spring Shine Events website</p>
                <p>Please respond within 24 hours</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply email to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: body.email,
      subject: 'Thank You for Contacting Spring Shine Events!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f472b6 0%, #fb7185 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
            .tagline { font-style: italic; font-size: 18px; opacity: 0.9; }
            .message { background: white; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #f472b6; }
            .details { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
            .contact-info { margin-top: 20px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Spring Shine</div>
              <div class="tagline">we make you celebrate</div>
            </div>
            <div class="content">
              <h2 style="color: #f472b6;">Thank You, ${body.name}!</h2>
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
                <h3 style="color: #f472b6;">In the meantime, feel free to reach us:</h3>
                <p>📞 <strong>Phone:</strong> +1 (555) 123-4567</p>
                <p>📧 <strong>Email:</strong> info@springshine.com</p>
                <p>💬 <strong>WhatsApp:</strong> <a href="https://wa.me/1234567890" style="color: #f472b6;">Click to Chat</a></p>
              </div>

              <div class="footer">
                <p>Follow us on social media for inspiration and updates!</p>
                <p style="margin-top: 10px;">
                  <a href="#" style="color: #f472b6; margin: 0 10px;">Facebook</a> |
                  <a href="#" style="color: #f472b6; margin: 0 10px;">Instagram</a> |
                  <a href="#" style="color: #f472b6; margin: 0 10px;">Twitter</a>
                </p>
                <p style="margin-top: 15px;">&copy; 2026 Spring Shine Events. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
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
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
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
