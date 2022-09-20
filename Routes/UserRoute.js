import express  from "express";
import { deleteUser, followUser, getUser, unFollowUser, updateUser, getAllUsers} from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/authMiddleWare.js";


const router = express.Router();

// users
router.get('/user', getAllUsers)

// to get user info using the Put method
router.get('/:id', getUser)

// to update user info using the Put method
router.put('/:id',authMiddleWare, updateUser)

// delete user
router.delete('/:id',authMiddleWare, deleteUser)

// following 
router.put('/:id/follow',authMiddleWare, followUser)

// unfollowing 
router.put('/:id/unfollow',authMiddleWare, unFollowUser)

// router.get('/', async(req, res) => {res.send("User Route")});


export default router;