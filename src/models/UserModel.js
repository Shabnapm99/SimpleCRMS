import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        trim:true,
    },
    email:{
        type: String,
        required: true,
        minLength: 3,
        trim:true,
    },
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        unique:true,
        trim:true,
    },
    password_hash: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required:true,
        trim:true
    }
},
{timestamps:true}
);
const UserModel = mongoose.model('User',userSchema)
export default UserModel;