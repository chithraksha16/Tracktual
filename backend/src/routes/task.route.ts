import express from "express";
import {postTask,deleteTask,getDayTasks, getAlltask} from '../controllers/task.controller'
import {authentication} from '../middleware/auth.middleware'



const router=express.Router()


router.post("/addtask",authentication,postTask)

router.delete("/delete/:id",authentication,deleteTask)

// router.get("/",authentication,getDayTasks)
router.get("/",authentication,getAlltask)




export default router