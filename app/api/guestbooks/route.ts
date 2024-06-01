import dbConnect from "@/lib/dbConnect";
import Guestbook from "@/models/Guestbook";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    
    try{
        const guestbooks = await Guestbook.find({});
        return NextResponse.json(guestbooks)
    }catch(err:any){
        return NextResponse.json({error: err.message})
    }

}