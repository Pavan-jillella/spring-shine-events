#!/usr/bin/env node

/**
 * Email Configuration Test Script
 * Run this to verify your email setup is working
 * Usage: node test-email.js
 */

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

console.log('🔍 Testing Email Configuration...\n');

// Check environment variables
console.log('Environment Variables:');
console.log('✓ EMAIL_USER:', process.env.EMAIL_USER || '❌ NOT SET');
console.log('✓ EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '✅ SET (hidden)' : '❌ NOT SET');
console.log('✓ COMPANY_EMAIL:', process.env.COMPANY_EMAIL || '❌ NOT SET');
console.log('');

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  console.error('❌ Missing required environment variables!');
  console.log('\n📝 Please configure .env.local with:');
  console.log('   EMAIL_USER=your-email@gmail.com');
  console.log('   EMAIL_PASSWORD=your-app-password');
  console.log('   COMPANY_EMAIL=company@example.com');
  process.exit(1);
}

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

console.log('🔄 Testing SMTP connection...\n');

// Verify connection
transporter.verify(function (error, success) {
  if (error) {
    console.error('❌ SMTP Connection Failed!');
    console.error('Error:', error.message);
    console.log('\n🔧 Troubleshooting Steps:');
    console.log('1. Verify your Gmail address is correct');
    console.log('2. Make sure you are using an App Password (not your regular password)');
    console.log('3. Enable 2-Step Verification: https://myaccount.google.com/security');
    console.log('4. Generate App Password: https://myaccount.google.com/apppasswords');
    console.log('5. Copy the 16-character password to .env.local');
    process.exit(1);
  } else {
    console.log('✅ SMTP Connection Successful!');
    console.log('');
    console.log('🎉 Your email configuration is working correctly!');
    console.log('');
    console.log('📧 Test email details:');
    console.log('   From:', process.env.EMAIL_USER);
    console.log('   To:', process.env.COMPANY_EMAIL);
    console.log('');
    console.log('✨ You can now use the contact form!');
    console.log('   Visit: http://localhost:3000/#contact');
  }
});
