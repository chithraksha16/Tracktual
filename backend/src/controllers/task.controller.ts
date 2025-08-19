import Day from "../models/day.model";
import Work from "../models/work.model";
import { Request,Response } from "express";

type TaskBody={
    title:string,
    description:string,
    tag:string,
    duration:number
}

 export const postTask=async(req:Request<{},{},TaskBody>,res:Response):Promise<void>=>{
    const {title,description,tag,duration}=req.body;
    const userId=req.user
    try{
        if(!title || !description || !tag || !duration){
            res.status(400).json({message:"All feilds are required"})
            return;
        }
        const task=await Work.create({
            userId:userId,
            title,
            description,
            tag,
            duration
        })

        const now=new Date(new Date())
        const startDay=new Date(now.setHours(0,0,0,0))
        const endDay=new Date(now.setHours(23,59,59,999))


        await Day.findOneAndUpdate({
            userId,
            startDay,
            endDay
        },{
            $setOnInsert: { startDay, endDay },
        $addToSet: { entries: task._id }
        },{
            upsert: true, new: true 
        })

        res.status(201).json({message:"Task Posted",work:task})
    }
    catch(error:unknown){
        console.error("Task not posted",error)
        res.status(400).json({message:"Task not Posted"})
    }

}