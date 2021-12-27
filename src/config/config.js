import dotenv from 'dotenv';

dotenv.config();

const dbDetails = {
    host: process.env.LOCAL_HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: {
        rejectUnauthorized: false
    }
}

const config = {
    port: process.env.PORT,
    dbDetails: dbDetails,
    jwt_secret: process.env.JWT_SECRET,
    database_url: process.env.DATABASE_URL
}

export default config