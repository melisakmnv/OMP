import { ErrorResponse } from "./errorResponse.js";

export const errorHandler = (err, req, res, next) => {

    err.statusCode = err.statusCode || 500;

    if (process.env.NODE_ENV === 'DEVELOPMENT') {


        res.status(err.statusCode).json({
            error: err,
            message: err.message,
            stack: err.stack,
        })
    }

    if (process.env.NODE_ENV === 'PRODUCTION') {

        let error = { ...err }
        error.message = err.message
        if (err.name === 'CastError') {
            console.log('hello');
            const message = `Ressource not found ! Invalid ${err.value}`
            error = new ErrorResponse(message, 400)
        }


        if (err.name === 'ValidationError') {
            const reason = Object.values(err.errors).map((val) => val.message);
            const message = `${reason}`
            error = new ErrorResponse(message, 400)
        }


        // MANY MORE ERRORS TO HANDLE :)

        res.status(error.statusCode).json({
            message: error.message || 'Internal Server Error'
        })
    }
}


export const notFound = (req, res, next) => {
    res.status(404).send(`404 - Not found!`)
    next()
}
