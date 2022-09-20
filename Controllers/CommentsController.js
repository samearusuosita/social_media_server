import CommentsModel from "../Models/CommentsModel.js";


// add comments

export const addComments = async(req, res) => {
    const {commentId, senderId, text} = req.body
    const comments = new CommentsModel({
        commentId,
        senderId,
        text
    })

    try {
        const result = await comments.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
        
    }
}


// get comments

export const getComments = async(req, res) =>{
    const {commentId} = req.params;
    try {
        const result =  await CommentsModel.find({commentId});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

// complete working on the comment controllers 

// updating comments

export const updateComments = async(req, res) =>{
    const commentId = req.params.id
    const {userId} = req.body

    try {
        const comments = await PostModel.findById(commentId)

        if (comments.userId === userId)
        {
            await comments.updateOne({$set : req.body})
            res.status(200).json("comments updated")
        }else{
            res.status(403).json("Action forbidden")
        }


    } catch (error) {
        res.status(500).json(error)
    }
}


// delete comments

export const deleteComments = async(req, res) =>{
    const id = req.params.id
    const {userId} = req.body

    try {
        const post = await PostModel.findById(id)
        if(post.userId === userId)
        {
            await post.deleteOne();
            res.status(200).json("Comment deleted successfully")
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}