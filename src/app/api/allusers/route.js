import { connectDB } from "@/utils/config/db";
import User from "@/utils/models/user";
import { NextResponse } from "next/server";

// getting indivisual user data from db ysing email
export const GET = async (request) => {
    await connectDB();
    const users = await User.find();
    return NextResponse.json(users, {status: 200})
}