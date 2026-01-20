import 'dotenv/config';
import {
  sendVerificationEmail,
  sendWelcomeEmail
} from './graphMailer.js';

async function runTest() {
  const testEmail = "maybachzee@gmail.com";
  const firstName = "Zwivhuya";
  const code = "482913";

  console.log("📨 Sending verification email...");
  await sendVerificationEmail(testEmail, code, firstName);

  console.log("📨 Sending welcome email...");
  await sendWelcomeEmail(testEmail, firstName);

  console.log("✅ Test finished");
}

runTest();
