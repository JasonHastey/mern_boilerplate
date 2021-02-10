import expressAsyncHandler from "express-async-handler"

import User from '../models/UserModal.js'

const authUser = expressAsyncHandler(async (req, res) => {
    const {email, password} = req.body

    //const user = await User.findOne({email})

    res.json({email, password})

})
export { authUser }