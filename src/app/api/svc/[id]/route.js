import { connectDB } from "@/utils/config/db"
import Service from "@/utils/models/service";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { id } = params;
    await connectDB();
    const service = await Service.findOne({ _id: id });
    return NextResponse.json( service , { status: 200 })
}