import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'


export const genToken=async(userId:Types.ObjectId):Promise<string | void>=>{
    try{
        const token=jwt.sign({id:userId},process.env.JWT_SECRET as string,{expiresIn:"7d"})
        return token
    }
    catch(error:unknown){
        throw error
    }
}