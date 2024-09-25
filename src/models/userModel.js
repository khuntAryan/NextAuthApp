import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please provide a username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "please provide an email address"],
        unique: true
    },
    password: {
        type: String,
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date
}, { timestamps: true })

const User = mongoose.models.users || mongoose.models("User", userSchema)

export default User