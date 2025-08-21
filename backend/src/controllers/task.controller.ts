
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



export const deleteTask=async(req:Request<{id:string}>,res:Response):Promise<void>=>{
    try{
        const {id}=req.params
        await Work.findByIdAndDelete(id)
        res.status(200).json({message:"Task deleted"})
    }
    catch(error:unknown){
        console.error("Error deleting task", error);
        res.status(500).json({ message: "Server error" });
    }
}



export const getDayTasks = async (req: Request,res: Response): Promise<void> => {
const userId = req.user;

const now = new Date();

try {
    const day = await Day.findOne({
    userId,
    startDay: { $lte: now },
    endDay: { $gte: now },
    }).populate("entries")

    if (!day) {
    res.status(404).json({ message: "No tasks found for today" });
    return;
    }
    res.status(200).json({ day });

} catch (error: unknown) {
    console.error("Error fetching tasks", error);
    res.status(500).json({ message: "Server error" });
}
};
