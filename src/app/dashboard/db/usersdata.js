// db/usersdata.js
import { connect } from "./db";
import { User } from "./models";

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
