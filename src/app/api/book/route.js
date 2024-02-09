import { connectDB } from "@/utils/config/db";
import Booking from "@/utils/models/booking";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connectDB();
    const { customeraddress, customername, customerlastname, customeremail, customerphone, customerneed, customerquantity, customersize, customerfrequency, customercost } = await request.json();
    console.log("fsfaf", customeraddress, customername, customerlastname, customeremail, customerphone, customerneed, customerquantity, customersize, customerfrequency, customercost);
    try {
        await Booking.create({ customeraddress, customername, customerlastname, customeremail, customerphone, customerneed, customerquantity, customersize, customerfrequency, customercost });
        return NextResponse.json({ message: "dasd" })
    } catch (error) {
        return NextResponse.json({ message: "booking failed" }, { status: 500 })
    }
}

export const GET = async (request) => {
    await connectDB();
    try {
    const ubookings = await Booking.find();
    return NextResponse.json({ bookings: ubookings })
    } catch (error) {
    return NextResponse.json({ message: "booking failed" }, { status: 500 })
    }
}