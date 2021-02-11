import mongoose from 'mongoose'
import path from 'path'
import express from 'express'
import dotenv from 'dotenv'

import userRoutes from './routes/userRoutes.js'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		})

		console.log(`MongoDB Connected: ${conn.connection.host}`)
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold)
		process.exit(1)
	}
}

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
	res.send('API is running....')
})

//app.use(notFound)
//app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
