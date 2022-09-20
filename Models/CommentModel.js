import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    members: {
        type: Array,
    },
},
    {
        timestamps: true,
    }
);

const CommentModel = mongoose.model("Comment", CommentSchema)

export default CommentModel