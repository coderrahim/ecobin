import bcryptjs from "bcryptjs";
import { connectDB } from "@/utils/config/db";
import User from "@/utils/models/user";
import { NextResponse } from "next/server";

// adding new user data in mongodb
export const POST = async (request) => {
    await connectDB();
    const { fullname, email, password, profilepicture, userstatus } = await request.json();
    console.log(fullname, email, password, profilepicture, userstatus);
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return NextResponse.json({ error: "user already exist" }, { status: 400 })
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        await User.create({ fullname, email, password: hashedPassword, profilepicture, userstatus });
        return NextResponse.json({ message: "registered successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// getting indivisual user data from db ysing email
export const GET = async (request) => {
    await connectDB();
    const email = request.nextUrl.searchParams.get("email")
    console.log(email);
    const user = await User.findOne({email: email})
    return NextResponse.json(user, {status: 200})
}