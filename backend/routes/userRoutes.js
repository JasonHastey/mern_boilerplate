import express from 'express'
import { authUser } from '../controllers/userController.js'
const router = express


router.post('/login', authUser)

export default router