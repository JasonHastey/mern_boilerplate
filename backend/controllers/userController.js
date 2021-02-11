import expressAsyncHandler from 'express-async-handler'

import User from '../models/UserModal.js'

const authUser = expressAsyncHandler(async (req, res) => {
	const { email, password } = req.body
	res.send({ email, password })
})

const getUsers = expressAsyncHandler(async (req, res) => {
	res.send(['Jason', 'Stephanie', 'Cosmo', 'Bandit'])
})

const registerUser = expressAsyncHandler(async (req, res) => {
	res.send('registerUser')
})

export { authUser, getUsers, registerUser }
