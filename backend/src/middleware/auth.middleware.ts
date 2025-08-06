import User from "../models/auth.model";
import {Request,Response,NextFunction} from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

interface AuthRequest extends Request{
    user?: typeof User.prototype
    cookies:{
        token?:string,
        [key:string]:any
    }
}

export const authentication= async(req:AuthRequest,res:Response,next:NextFunction):Promise<void>=>{
try{
    const token=req.cookies.token
    if(!token){
        res.status(401).json({message:"Unauthorized: Invalid credentials"})
        return;
    }
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