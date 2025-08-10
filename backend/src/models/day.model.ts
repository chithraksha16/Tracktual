import mongoose, {Document, Schema,Types } from "mongoose";


type task={
    userId:Types.ObjectId,
    title:string,
    description:string,
    duration:number,
    tag:string,
    createdAt:Date
}

interface IDay extends Document{
    userId:Types.ObjectId,
    entries: task[],
}



const daySchema=new Schema<IDay>({
    userId:{
        type:Schema.Types.ObjectId,
        required:true
    },
    entries:{
        type:[{
            userId:{
                type:Schema.Types.ObjectId,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            description:{
                type:String,
                required:true
            },
            duration:{
                type:Number,
                required:true
            },
            tag:{
                type:String,
                required:true
            },
            createdAt:{
                type:Date,
                default: new Date
            }
        }],
        required:true
    }

},{
    timestamps:true
})


const Day=mongoose.model<IDay>("Day",daySchema)
export default Day