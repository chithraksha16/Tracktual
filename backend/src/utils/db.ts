import mongoose from "mongoose"


export const connectDB=async():Promise<void>=>{
    await mongoose.connect(process.env.MONGO_URI as string,{

    dbName:"tracktual"
    }).then(()=>{
        console.log(" MongoDB Databse Connected")
    }).catch((error:any)=>{
        console.error("DB Connection Failed",error.message)
    })

}