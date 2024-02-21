import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
    {
        customeraddress: {
            type: String,
            required: true
        },
        customername: {
            type: String,
            required: true
        },
        customerlastname: {
            type: String,
            required: true
        },
        customeremail: {
            type: String,
            required: true
        },
        customerphone: {
            type: String,
            required: true
        },
        customerneed: {
            type: String,
            required: true
        },
        customerquantity: {
            type: Number,
            required: true
        },
        customersize: {
            type: String,
            required: true
        },
        customerfrequency: {
            type: String,
            required: true
        },
        customercost: {
            type: Number,
            required: true
        },
        status: String
    }
)

const Booking = mongoose.models.bookings || mongoose.model("bookings", bookSchema);

export default Booking;