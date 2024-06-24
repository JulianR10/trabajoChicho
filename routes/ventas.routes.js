import { Router } from "express";
import { createSale,findById,findAll } from "../db/actions/sales.actions.js";
const router = Router()


router.post('/create',async(req,res)=>{
    const {products, total, user} = req.body
    try{
        const result = await createSale({products, total, user})
        res.status(200).json(result)
    }catch(error){
        res.status(400).json()
    }
})


router.get('/all',async(req,res)=>{
    try{
        const result = await findAll()
        res.status(200).json(result)
    }catch(error){
        res.status(400).json()
    }
})
router.get('/byId/:id',async(req,res)=>{
    const id = req.params.id
    try{
        const result = await findById(id)
        res.status(200).json(result)
    }catch(error){
        res.status(400).json()
    }
})






export default router