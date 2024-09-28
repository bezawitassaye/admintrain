
import { connect } from "./db"
import { User } from "./models"

export const getusers = async ()=>{
    try {
        connect()
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error)
        throw new Error("Faild to fetch users") 
    }
}