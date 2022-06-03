import jwt from 'jsonwebtoken';
import UserModel from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ErrorResponse } from "../utils/errorResponse.js";


export const protect = asyncHandler(async (req, res, next) => {

    let token

    // ========= CHECK TOKEN ========= //


    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {

            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.SECRET)

            req.user = await UserModel.findById(decoded.id).select('-password')
            next()

        } catch (error) {
            console.error(error)
            return next(new ErrorResponse('Not Authorized ! Token failed', 401))
        }
    }

    if (!token) return next(new ErrorResponse('Not Authorized ! No Token', 401))
})


// ========= CHECK USER ROLE ========= //
export const admin = (req, res, next) => {

    if (req.user.role !== 'admin') return next(new ErrorResponse('Not Authorized ! Not admin', 401))
    next()
}