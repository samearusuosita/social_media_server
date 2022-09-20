import userModel from "../Models/userModel.js";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// registering new users
export const registerUser = async(req, res) => {
    
    // json web token
    // const{username, password, firstname, lastname} = req.body;


    // hashing password in the database...
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass
    const newUser = new userModel(req.body)
    const {username} = req.body

    try{

        // check if user  already exist 
        const oldUser = await userModel.findOne({username})
        if(oldUser){
            return res.status(400).json({message: "User name is already registered!"})
        }
        const user = await newUser.save();

        const token = jwt.sign({
                username: user.username,
                id: user._id}, process.env.JWT_KEY, {expiresIn: '1h'})
        res.status(200).json({user, token});
    }catch (error) {
        res.status(500).json({message: error.message})
    }

};

// loggin user 58 time


export const loginuser = async(req, res) => {
    const {username, password} = req.body

    try{
        const user = await userModel.findOne({username: username})

        if(user){
            const validity = await bcrypt.compare(password, user.password)

            if(!validity){
                res.status(400).json("Wrong password")
            } 
            else {
                const token = jwt.sign({
                    username: user.username,
                    id: user._id}, process.env.JWT_KEY, {expiresIn: '1h'})
            res.status(200).json({user, token});
            }
        }
        else{
            res.status(404).json("User does not exsits")
        }
    }catch (error){
        res.status(500).json({message: error.message})

    }
};


