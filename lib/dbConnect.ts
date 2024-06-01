import mongoose from "mongoose";

const URI:string = process.env.MONGODB_URI || ""
if(!URL) throw new Error('MONGODB_URI is missing from your environment variables.')

const connection: { isConnected?: number } = {}

async function dbConnect(){
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(URI)

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;