import mongoose, {Document, Schema,Types } from "mongoose";

interface IDay extends Document{
    userId:Types.ObjectId,
    startDay:Date,
    endDay:Date,
    entries: Types.ObjectId[]
}



const daySchema=new Schema<IDay>({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    startDay:{
        type:Date,
        required:true
    },
    endDay:{
        type:Date,
        required:true
    },
    entries:[{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Work'
    }]

},{
    timestamps:true
})

daySchema.pre("validate",function (next){
    if(!this.startDay || !this.endDay){
        const now= new Date(Date.now());
        const start=new Date(now.setHours(0,0,0,0))
        const end=new Date(now.setHours(23,59,59,999))

        this.startDay=start;
        this.endDay=end;
    }
    next()
})


const Day=mongoose.model<IDay>("Day",daySchema)
export default Day