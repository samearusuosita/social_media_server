// install multer = multer makes it easy to upload multimedia on the server side

// stopped at 1;33

import express from "express";

const router = express.Router();

import multer from 'multer';
// import router from "./AuthRoute";

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, "public/images");
    },
    filename: (req, file, cd) =>{
        cd(null, req.body.name);
    },
});

const upload = multer({storage: storage});

router.post('/', upload.single("file", (req, res) => {
    try {
        return res.status(200).json("File Uploaded Successfuly")
    } catch (error) {
        console.log(error)
        
    }
}))

export default router; 


