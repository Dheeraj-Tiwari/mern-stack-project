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
        ref: 'User',   //referecs to user model that is user.js
        required: true,
    },
}, {timestamps: true }); //two more feilds created and updeted at

export default mongoose.model("Task", taskSchema); //from schema it will creat a modeal that is Task