#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Landing Page Builder - Deployment Helper\n');

// Check if dist folder exists
if (!fs.existsSync('dist')) {
  console.log('❌ Build folder not found. Building first...\n');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully!\n');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

console.log('📦 Build ready! Choose your deployment option:\n');

console.log('1. 🌟 Vercel (Recommended)');
console.log('   Command: npx vercel --prod');
console.log('   Features: Free, fast, automatic HTTPS, custom domains\n');

console.log('2. 🟢 Netlify');
console.log('   Command: npx netlify-cli deploy --prod --dir=dist');
console.log('   Features: Free, form handling, serverless functions\n');

console.log('3. ⚡ Surge.sh');
console.log('   Command: npx surge dist');
console.log('   Features: Free, simple, instant deployment\n');

console.log('4. 🔥 Firebase Hosting');
console.log('   Command: npx firebase-tools deploy');
console.log('   Features: Free, Google infrastructure\n');

console.log('5. 📄 GitHub Pages');
console.log('   Manual: Push to GitHub, enable Pages in settings');
console.log('   Features: Free, integrated with GitHub\n');

console.log('💡 Quick Start:');
console.log('   Run: npx vercel --prod');
console.log('   This will deploy your app in under 2 minutes!\n');

console.log('📁 Your build files are in the ./dist folder');
console.log('🌐 Ready to go live! 🚀');
