import mongoose,{Document, Schema, Types} from "mongoose";


export interface IWork{
    userId:Types.ObjectId,
    title:string,
    description:string,
    hours:number,
    minutes:number,
    tag:string,
    createdAt:Date
}

interface IWorkDocument extends IWork,Document{
    createdAt:Date,
    updatedAt:Date
}


const workSchema= new Schema<IWorkDocument>({
        userId:{
            type:Schema.Types.ObjectId,
            ref:'User',
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
        hours:{
            default:0,
            type:Number,
            required:true
        },
        minutes:{
            default:0,
            type:Number,
            required:true
        },
        tag:{
            type:String,
            maxlength:10,
            trim:true,
            required:true
        },
},{timestamps:true})



const Work=mongoose.model<IWorkDocument>("Work",workSchema);
export default Work