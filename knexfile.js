const dotenv = require('dotenv')

 dotenv.config() module.exports = {   client: 'pg',   connection: {     host: process.env.DB_HOST ?? 'localhost',     port: process.env.DB_PORT ?? 5432,     user: process.env.DB_USER ?? 'postgres',     password: process.env.DB_PASSWORD ?? 'postgres',     database: process.env.DB_NAME ?? 'ndxstr',     ssl: {       rejectUnauthorized: false, // <-- CHANGE THIS LINE       ca: process.env.DB_SSL_CERT,     },   },   pool: { min: 4, max: 16 }, // <-- AND THIS LINE
  seeds: {
    directory: './seeds',
  },
}
