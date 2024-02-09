import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
    {
        servicename: {
            type: String,
            required: true
        },
        servicecategory: {
            type: String,
            required: true
        },
        servicecost: {
            type: Number,
            required: true
        },
        serviceimage: {
            type: String,
            required: true
        },
        serviceiconimage: {
            type: String,
            required: true
        },
        servicedescription: {
            type: String,
            required: true
        },
        serviceaddedate: {
            type: String,
            required: true
        },
    }
)

const Service = mongoose.models.services || mongoose.model("services", serviceSchema);

export default Service;