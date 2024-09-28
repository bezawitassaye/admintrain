// db/usersdata.js
import { connect } from "./db";
import { Product, User } from "./models";

export const getusers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const itemsPerPage = 2;
    
    try {
        await connect(); // Ensure connection is awaited
        const count = await User.countDocuments({ username: { $regex: regex } }); // Use countDocuments
        const users = await User.find({ username: { $regex: regex } })
            .limit(itemsPerPage)
            .skip(itemsPerPage * (page - 1));
        return { users, count };
    } catch (error) {
        console.error("Error fetching users:", error);
        return { users: [], count: 0 }; // Return empty results on error
    }
};


export const getProduct = async (q, page) => {
    const regex = new RegExp(q, "i");
    const itemsPerPage = 2;
    
    try {
        await connect(); // Ensure connection is awaited
        const count = await Product.countDocuments({ title: { $regex: regex } }); // Use countDocuments
        const products = await Product.find({ title: { $regex: regex } })
            .limit(itemsPerPage)
            .skip(itemsPerPage * (page - 1));
        return { products, count };
    } catch (error) {
        console.error("Error fetching users:", error);
        return { products: [], count: 0 }; // Return empty results on error
    }
};
