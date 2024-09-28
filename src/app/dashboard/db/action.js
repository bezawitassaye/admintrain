import { revalidatePath } from "next/cache";
import { connect } from "./db";
import { User } from "./models";
import { redirect } from "next/dist/server/api-utils";
import bcrypt from "bcrypt"

export const addUser = async(formData)=>{
    "use server"
    const {username,email,password,phone,address,isAdmin,isActive}=Object.fromEntries(formData);

    try {
        connect()
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
            phone,
            address,
            isAdmin,
            isActive

        })
        await newUser.save()
        console.log("user created")
    } catch (error) {
        console.log(error)
        
        
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}