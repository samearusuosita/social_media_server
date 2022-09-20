import express from "express";
import { addMessage, getMassages } from "../Controllers/MessageController.js";

const router = express.Router()

router.post('/', addMessage)
router.get('/:chatId', getMassages)

export default router