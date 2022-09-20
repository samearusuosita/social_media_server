import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema(
    {
    commentId: {
        type: String, 
    },
    senderId: {
        type: String,
    },
    text: {
        type: String,
    },
},
    {
        timestamps: true,
    }
);

const CommentsModel = mongoose.model("Comments", CommentsSchema)

export default CommentsModel