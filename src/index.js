//require('dotenv').config({path:"./env"})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path:"./env"})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`server is running at port: http://localhost:${process.env.PORT}`)
    })
    app.on("error",(error)=>{
                    console.log("ERROR:", error)
                })
})
.catch((err)=>{
    console.log("MongoDB connection Failed",err)
})

// function connectDB(){}


// connectDB()

// ;(async()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR:", error)
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Listening at ${process.env.PORT}` )
//         })
//     } catch (error) {
//         console.log("ERROR:",error)
//         throw err
//     }
// })()

