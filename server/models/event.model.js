import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        eventName: {
            type: String,
            required: true
        },
        eventDescription: {
            type: String,
            required: true
        },
        eventImage: {
            type: String,
            default: ''
        },
        startDate: Date,
        endDate: Date
    },
    {
        timestamps: true
    }

)

const EventModel = mongoose.model('event', eventSchema);
export default EventModel;