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
}, {timestamps: true }); // Adds createdAt and updatedAt fields

export default mongoose.model("User", userSchema); // Creates a model named 'User' from the schema