import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import getAllUsers from './Routes/UserRoute.js';
import PostRoute from './Routes/postRoute.js';
import UploadRoute from './Routes/UploadRoute.js';



// chat router
import ChatRoute from './Routes/ChatRoute.js';

import MesssageRoute from "./Routes/MessageRoute.js";


// comments 
import CommentRoute from "./Routes/CommentRoute.js"
import CommentsRoute from "./Routes/CommentsRoute.js"


// routes


const app = express();

// to serve images from public
app.use(express.static('public'))
app.use('/images', express.static("images"))


// Middleware

app.use(bodyParser.json({limit: '30mb', extended: true}));

app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

app.use(cors());

dotenv.config()

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(process.env.PORT || 5001, ()=> console.log(`Server online on ${process.env.PORT}`)))
.catch((error) => console.log(error));


// usage of routes

app.use('/', getAllUsers);
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/posts', PostRoute);
app.use('/upload', UploadRoute);
app.use('/chat', ChatRoute);
app.use('/message', MesssageRoute);

app.use('/comment', CommentRoute);
app.use('/comments', CommentsRoute);


// install i cors ..... this will allow you send request to cors origin