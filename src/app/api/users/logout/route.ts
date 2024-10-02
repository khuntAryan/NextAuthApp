import mongoose from "mongoose";

import { NextResponse } from "next/server";

export async function get () {
    try {
       const response = NextResponse.json({
        message:"logout successfull",
        success: true
       })
       //this will delete the cookie from the user 
       response.cookies.set("token","",{
        httpOnly:true
       })
       return response
    } catch (error: any) {
        return NextResponse.json({ message: "error" }, { status: 500 })
        console.log(error.message)
    }
}