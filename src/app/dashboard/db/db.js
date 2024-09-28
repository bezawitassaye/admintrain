import mongoose from "mongoose";

 export const connect=async()=>{
    const connection={}
    try {
        if(connection.isConnected) return ;
        const db = await mongoose.connect(process.env.MONGO_URL)
        connection.isConnected=db.connections[0].readyState;
        console.log("data base conntected successfully")
    } catch (error) {
      
        console.log("data base do not connected")
       
        
    }
 }