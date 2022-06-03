import express from 'express';
import { getAllEvents, getEvent, addEvent, editEvent, deleteEvent } from './../controllers/event.controllers.js'
import { protect, admin } from "../middlewares/auth.middleware.js";

const router = express.Router()


router
    .route('/')
    .get(getAllEvents)
    .post(protect, admin, addEvent)


router
    .route('/:id')
    .get(getEvent)
    .patch(protect, admin, editEvent)
    .delete(protect, admin, deleteEvent)


export default router