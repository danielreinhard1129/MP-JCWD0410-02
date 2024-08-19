import { config } from 'dotenv';
import { resolve } from 'path';

export const NODE_ENV = process.env.NODE_ENV || 'development';

export const JWT_SECRET = 'your_secret_key_here';

export const gmailAppPassword = 'your_app_password_here';
export const gmailEmail = 'your_email_here';

const envFile ='.env';

config({ path: resolve(__dirname, `../${envFile}`) });
config({ path: resolve(__dirname, `../${envFile}.local`), override: true });

// Load all environment variables from .env file

export const PORT = process.env.PORT || 8000;
export const DATABASE_URL = process.env.DATABASE_URL || '';

export { config };
