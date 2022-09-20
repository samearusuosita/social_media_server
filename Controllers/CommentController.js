import CommentModel from "../Models/CommentModel.js";

export const createComment = async(req, res) =>{
    const newComment = new CommentModel({
        members: [req.body.senderId, req.body.receiverId],
    });

    try {
        const result = await newComment.save()
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
        
    }
};


export const userComment = async(req, res) => {
    try {
        const Comment = await CommentModel.find({
            members: {$in: [req.params.userId]}
        })
        res.status(200).json(Comment);
    } catch (error) {
        res.status(500).json(error);
    }
}



export const findComment = async(req, res) => {
    try {
        const Comment = await CommentModel.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}
        })
        res.status(200).json(Comment);
    } catch (error) {
        res.status(500).json(error);
    }
}