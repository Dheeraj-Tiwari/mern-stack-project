import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
       type: String,
       required: true,
    },
    completed: {
        type: Boolean,
        required: false,
        default: false,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',    // References the User model in user.js
        required: true,
    },
}, {timestamps: true });  // Adds createdAt and updatedAt fields

export default mongoose.model("Task", taskSchema); // Creates a model named 'Task' from the schema