import express from "express";
import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from "../Controllers/PostController.js";

const router = express.Router()

// making post
router.post('/', createPost)

// geting post
router.get('/:id', getPost)

// update post
router.put('/:id', updatePost)


// delete post
router.delete('/:id', deletePost)


// like post
router.put('/:id/like', likePost)

// like post
router.get('/:id/timeline', getTimelinePosts)

// router.get('/', async(req, res) => {res.send("Post Route")});


export default router; 
