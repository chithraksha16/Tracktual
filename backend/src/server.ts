import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './utils/db'
import authRouter from './routes/auth.route'
import taskRouter from './routes/task.route'
dotenv.config()



const app=express()
const PORT:number=parseInt(process.env.PORT || "3000",10)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',authRouter);
app.use('/api/task',taskRouter);

const startServer=async():Promise<void>=>{
    try{
    await connectDB();
    app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
    }
    catch(error){
    console.error("Error in connecting DB and server")
    }

}

startServer()


