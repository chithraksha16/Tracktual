import User from "../models/auth.model";
import {Request,Response,NextFunction} from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'



export const authentication= async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
try{
    const authHeader=req.headers["authorization"]

    if(!authHeader || !authHeader.startsWith("Bearer")){
        res.status(401).json({message:"Unauthorized: Invalid credentials"})
        return;
    }
    const token=authHeader.split(" ")[1]
    const decoded= jwt.verify(token,process.env.JWT_SECRET as string) as JwtPayload
    if(!decoded){
        res.status(401).json({message:"Unauthorized: no token provided"})
        return;
    }

    const user= await User.findById(decoded.id).select("-password")
    if(!user){
        res.status(401).json({message:"Unauthorized: Invalid credentials"})
        return;
    }

    req.user=user
    next()
}
catch(error:any){
    console.error("Authentication Error:",error.message)
    res.status(401).json({message:"Auth  Error"})
}
}