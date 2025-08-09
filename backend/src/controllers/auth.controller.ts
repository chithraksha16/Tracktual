import User from "../models/auth.model";
import bcrypt from 'bcryptjs'
import {Request,Response} from 'express'
import { genToken } from "../utils/token.utils";


export const signup=async(req:Request,res:Response):Promise<void>=>{
    const {name,email,password}=req.body;
    try{
        const existingUser= await User.findOne({email})
        if(existingUser){
            res.status(400).json({message:"User already exists"})
            return ;
        }
        if(password.length < 6){
            res.status(400).json({message:"Password length must be 6 or more"})
            return;
        }
        const salt=await bcrypt.genSalt(10);
        const hashPass= await bcrypt.hash(password,salt)

        const newUser= new User({
            name,
            email,
            password:hashPass
        })
        await newUser.save()
        if(newUser){
        const token=  await genToken(newUser._id)
        res.status(201).json({message:"User creadted Successfully !",
            user:{
                id:newUser._id,
                name:newUser.name,
                email:newUser.email
            },
            token
        })
        }
    }
    catch(error:any){
        console.error(" Signup Error",error.message)
        res.status(500).json({message:"Internal server error"})
    }

}

export const login=async(req:Request,res:Response):Promise<void>=>{
    const {email,password}=req.body;
    try{
        const existingUser= await User.findOne({ email });
        if(!existingUser){
            res.status(400).json({message:"User does not exist"})
            return;
        }
        const isMatch= await bcrypt.compare(password,existingUser.password)
        if(!isMatch){
            res.status(400).json({message:"Invalid credentials"})
            return;
        }
        const token=await genToken(existingUser._id)
        res.status(200).json({message:"Login successful",
            user:{
                id:existingUser._id,
                name:existingUser.name,
                email:existingUser.email
            },
            token
        })
        
    }
    catch(error:any){
        console.error(" Login Error",error.message)
        res.status(500).json({message:"Internal server error"})
    }

}

export const checkAuth = async(req:Request,res:Response):Promise<void>=>{
    try{
        res.status(200).json(req.user)
    }
    catch(error){
        console.error("Checking Auth error")
        res.status(500).json({message:"Internal server error"})
    }

}

