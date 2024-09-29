"use server";

import { connect } from "./db";
import { Product, User } from "./models";
import bcrypt from "bcrypt";
import { revalidatePath } from 'next/cache'; // Ensure this is correct


 // Adjust this import based on your project structure
import {  redirect } from 'next/navigation'; 

export const addUser = async (formData) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        await connect(); // Await connection
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });
        await newUser.save();
        console.log("User created");

        revalidatePath("/dashboard/users");

        // Return the redirect URL
        return { redirect: "/dashboard/users" }; 
    } catch (error) {
        console.error(error);
        return { error: "Failed to create user" }; // Handle errors appropriately
    }
};

export const addProduct = async (formData) => {
    const { title, desc, price, stock, color, size } = Object.fromEntries(formData);

    try {
        await connect(); // Await connection
        
        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
        });
        await newProduct.save();
        console.log("Product created");

        revalidatePath("/dashboard/products");

        // Return the redirect URL
        return { redirect: "/dashboard/products" }; 
    } catch (error) {
        console.error(error);
        return { error: "Failed to create product" }; // Handle errors appropriately
    }
};


export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connect(); // Await connection
        
       
        await Product.findByIdAndDelete(id);
        console.log("Product deleted");

        revalidatePath("/dashboard/products");

        // Return the redirect URL
     
    } catch (error) {
        console.error(error);
        return { error: "Failed to delete product" }; // Handle errors appropriately
    }
};

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        await connect(); // Await connection
        
       
        await User.findByIdAndDelete(id);
        console.log("user deleted");

        revalidatePath("/dashboard/users");

        // Return the redirect URL
     
    } catch (error) {
        console.error(error);
        return { error: "Failed to delete user" }; // Handle errors appropriately
    }
};


export const getuser = async (id) => {
  
    try {
        await connect(); // Ensure connection is awaited
        const users = await User.findById(id)
        console.log("user geted")   
        return users;
    } catch (error) {
        console.error("Error fetching users:");
     // Return empty results on error
    }
};


export const getproduct = async (id) => {
  
    try {
        await connect(); // Ensure connection is awaited
        const product = await Product.findById(id)
        console.log("producted geted")   
        return product;
        
    } catch (error) {
        console.error("Error fetching users:");
     // Return empty results on error
    }
};


export const updateUser = async (formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {
        await connect(); // Await connection

        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };

        // Clean up fields
        Object.keys(updateFields).forEach((key) => {
            if (updateFields[key] === "" || updateFields[key] === undefined) {
                delete updateFields[key];
            }
        });

        console.log("User update fields:", updateFields); // Log fields being updated

        // Update user in the database
        await User.findByIdAndUpdate(id, updateFields);
        console.log("User updated in DB");

        revalidatePath("/dashboard/users");

        // Return the redirect URL
        return { redirect: "/dashboard/users" }; // Should redirect to the users list
    } catch (error) {
        console.error("Error updating user:", error); // Log error
        return { error: "Failed to update user" }; // Return error message
    }
};