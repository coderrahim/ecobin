import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION_URL, {
            dbName: 'EcoBin'
        });
        console.log("EcoBin project connected with mongodb");
    }catch(error){
        console.log("got error while connecting with database of EcoBin ", error);
    }
}