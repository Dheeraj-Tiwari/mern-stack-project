import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
       type: String,
       required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true }); //two more feilds created and updeted at

export default mongoose.model("User", userSchema); //from schema it will creat a modeal that is User