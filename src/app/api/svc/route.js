import { connectDB } from "@/utils/config/db"
import Service from "@/utils/models/service";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connectDB();
    const { servicename, servicecategory, serviceimage, serviceiconimage, servicedescription, serviceaddedate, servicecost } = await request.json();
    console.log("fsfaf", servicename, servicecategory, serviceimage, serviceiconimage, servicedescription, serviceaddedate, servicecost);
    try {
        const existService = await Service.findOne({
            $and: [
                { servicename: servicename },
                { servicecategory: servicecategory }
            ]
        })
        if (existService) {
            return NextResponse.json({ error: "service already exist" }, { status: 400 })
        }
        await Service.create({ servicename, servicecategory, servicecost, serviceimage, serviceiconimage, servicedescription, serviceaddedate });
        return NextResponse.json({ message: "service created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "service creation failed" }, { status: 500 })
    }
}

export const GET = async () => {
    await connectDB();
    const services = await Service.find();
    return NextResponse.json({services});
}