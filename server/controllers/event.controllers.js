import EventModel from './../models/event.model.js'
import { asyncHandler } from "../utils/asyncHandler.js";
import { ErrorResponse } from "../utils/errorResponse.js";



export const getAllEvents = asyncHandler(async (req, res) => {
    const events = await EventModel.find({});
    res.status(200).json(events);
})


export const getEvent = asyncHandler(async (req, res, next) => {
    const event = await EventModel.findById(req.params.id)
    if (!event) return next(new ErrorResponse('Event Not Found', 404));
    res.status(200).json(event);
})



export const addEvent = asyncHandler(async (req, res) => {
    const newEvent = req.body;
    await EventModel.create(newEvent)
    res.status(201).json({ newEvent });
})

export const editEvent = async (req, res, next) => {
    try {

    } catch (error) {

    }
}

export const deleteEvent = asyncHandler(async (req, res, next) => {
    const event = await EventModel.findById(req.params.id)
    if (!event) return next(new ErrorResponse('Product Not Found', 404))
    await event.remove()
    res.status(200).json({ message: "success" });
})