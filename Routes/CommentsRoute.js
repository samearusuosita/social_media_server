import express from "express";
// import { addMessage, getMassages } from "../Controllers/MessageController.js";
import { addComments, getComments } from "../Controllers/CommentsController.js";

const router = express.Router()

router.post('/', addComments)
router.get('/:commentId', getComments)

export default router