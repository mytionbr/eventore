import dotenv from 'dotenv';
import hasSSL from '../util/hasSSL.js';

dotenv.config();

/**
 * checks if the application is in development or production mode
 */
const ssl = hasSSL()

const dbDetails = {
  host: process.env.LOCAL_HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
  ssl: ssl,
};

const config = {
  port: process.env.PORT,
  dbDetails: dbDetails,
  jwt_secret: process.env.JWT_SECRET,
  database_url: process.env.DATABASE_URL,
};

export default config;
