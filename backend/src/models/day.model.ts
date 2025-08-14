import mongoose, {Document, Schema,Types } from "mongoose";



interface IDay extends Document{
    userId:Types.ObjectId,
    entries: Types.ObjectId
}



const daySchema=new Schema<IDay>({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    entries:[{
        type:Types.ObjectId,
        required:true,
        ref:'Work'
    }]

},{
    timestamps:true
})


const Day=mongoose.model<IDay>("Day",daySchema)
export default Day