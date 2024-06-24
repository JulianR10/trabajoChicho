import { connectToDatabase } from "../connection.js";
import User from "../schemas/user.schemas.js";

export const createUser = async ({ name, lastName, email, password, isAdmin }) => {
    try {
        await connectToDatabase();
        const res = await User.create({ name, lastName, email, password, isAdmin });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};

export const findAllUsers = async () => {
    try {
        await connectToDatabase();
        const res = await User.find();
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};

export const findUserByUsernameAndPassword = async (userName, pass) => {
    try {
        await connectToDatabase();
        const user = await User.findOne({ email: userName, password: pass });
        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        console.log(error);
    }
};
