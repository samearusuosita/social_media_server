// user schema

import mongoose from "mongoose";



const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksAt: String,
        country: String,
        relationship: String,
        followers: [],
        following: []

    },
    {timestamps: true}
)

const userModel = mongoose.model("Users", UserSchema);

export default userModel;