import express from 'express'
import {
	authUser,
	getUsers,
	registerUser,
} from '../controllers/userController.js'
const router = express()

router.route('/').post(registerUser).get(getUsers)
router.post('/login', authUser)

export default router
