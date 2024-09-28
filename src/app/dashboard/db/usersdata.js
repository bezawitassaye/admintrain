
import { connect } from "./db"
import { User } from "./models"

export const getusers = async (q)=>{
    console.log(q)
    const regex = new RegExp(q,"i")
    try {
        connect()
        const users = await User.find({username:{$regex:regex}})
        return users
    } catch (error) {
        console.log(error)
        throw new Error("Faild to fetch users") 
    }
}