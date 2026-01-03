import { AsyncHandler } from "../utils/AsyncHanlder.js"

export const registerUser=AsyncHandler(async(req,res)=>{
    res.status(200).json({
        message:"success done"
    })
})