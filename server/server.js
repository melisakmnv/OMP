
// #region IMPORT MODULES
import express from "express";
import colors from "colors";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/connectDB.js";
import beerRoutes from './routes/beer.routes.js';
import eventRoutes from "./routes/event.routes.js"
import authRoutes from "./routes/auth.routes.js"
import {errorHandler} from './utils/error.js'
// #endregion IMPORT

dotenv.config()
connectDB()



const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(logger('dev'))
app.use(cors({
    origin: process.env.FRONT_END_URL,
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/api/beers', beerRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/auth', authRoutes)

app.use(errorHandler)



app.listen(PORT, () => console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta.bold))