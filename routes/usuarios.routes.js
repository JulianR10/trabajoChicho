import { Router } from "express";
import { createUser, findAllUsers, findUserByUsernameAndPassword } from "../db/actions/user.actions.js";
const router = Router();

router.get('/all', async (req, res) => {
    try {
        const result = await findAllUsers();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json();
    }
});

router.post('/create', async (req, res) => {
    const { name, lastName, email, password, isAdmin } = req.body;
    try {
        const result = await createUser({ name, lastName, email, password, isAdmin });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json();
    }
});

router.post('/login', async (req, res) => {
    const { userName, pass } = req.body;
    try {
        const result = await findUserByUsernameAndPassword(userName, pass);
        if (result) {
            const data = {
                name: result.name,
                lastName: result.lastName,
                userName: result.email, 
                status: true
            };
            console.log(data);
            res.status(200).json(data);
        } else {
            res.status(400).json({ status: false });
        }
    } catch (error) {
        res.status(500).json({ status: false, message: "Server error" });
    }
});

export default router;
