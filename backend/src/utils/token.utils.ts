import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'
import { Response } from 'express'


export const genToken=async(userId:Types.ObjectId,res:Response):Promise<string | void>=>{
    try{
        const token=jwt.sign({id:userId},process.env.JWT_SECRET as string,{expiresIn:'7d'});
        res.cookie('token',token,{
            httpOnly:true,
            sameSite:'strict',
            secure:process.env.NODE_ENV !== 'development',
            maxAge:7 *24* 60* 60*1000
        })
        return token
    }
    catch(error:any){
        console.log("GenratingToken Error",error.message)
    }
}