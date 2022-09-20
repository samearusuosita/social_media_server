import express from 'express';
// import { createChat, findChats, userChats } from '../Controllers/ChatController.js';
import { createComment, findComment, userComment } from '../Controllers/CommentController.js';

const router = express.Router()

router.post("/", createComment)
router.get("/:commentId", userComment)
router.get("/find/:firstId/:secondId", findComment)

export default router