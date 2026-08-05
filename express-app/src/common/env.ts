import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 8000
export const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI || ''
export const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || ''