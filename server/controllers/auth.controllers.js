import UserModel from "../models/user.model.js";
import { ErrorResponse } from "../utils/errorResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateToken } from "../utils/generateToken.js";


export const signIn = asyncHandler(async (req, res, next) => {

    const { email, password } = req.body

    // ========= CHECK USER IDENTITY ========= //

    if (!email || !password)
        return next(new ErrorResponse('Please enter username and password', 400))

    const user = await UserModel.findOne({ email })
    if (user && (await user.matchPassword(password))) {


        res.status(200).json({
            message: 'Sign in successfully',
            _id: user._id,
            username: user.username,
            role: user.role,
            token: generateToken(user._id),
        })
    }
    else return next(new ErrorResponse('Invalid Email or Password', 401))
})


export const signUp = asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body

    // ========== CHECK USER =========== //

    const user = await UserModel.findOne({ email })
    if (user) return next(new ErrorResponse('This user already exist', 400))

    // ========== CREATE NEW USER =========== //
    const newUser = await UserModel.create({ username, email, password });
    res.status(201).json({
        message: 'Sign up successfully',
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        token: generateToken(newUser._id),
    })
})



