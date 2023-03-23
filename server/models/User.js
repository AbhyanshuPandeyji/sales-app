import mongoose from "mongoose";


// telling mogodb how our user data gonna look like 
const UserSchema = new mongoose.Schema(
    {
    // by the assignment
    // name: { type: String , required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String , required: true , unique: true },
    password: { type: String , required: true },
    // profile picture will be an url to link it 
    },
    // for when user is being created
    { timestamps : true}
);


// for using it in controller and different routes to get the user data 
export default mongoose.model('User',UserSchema);