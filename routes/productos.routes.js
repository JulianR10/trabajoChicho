import { Router } from "express";
import { createProd, findAll,findById, findByCategory, updateNameById, deleteById} from "../db/actions/product.actions.js";
const router = Router()

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
router.get('/byCategory/:category',async(req,res)=>{
    const category = req.params.category
    
    try{
        const result = await findByCategory(category)
        res.status(200).json(result)
    }catch(error){
        res.status(400).json()
    }
})

router.post('/create',async(req,res)=>{
    const {name, desc, stock, price,category} = req.body
  
    try{
        const result = await createProd({name,imgUrl, desc, stock, price,category})
       
        res.status(200).json(result)
    }catch(error){
        res.status(400).json()
    }
})

router.patch('/updateByName/:id',async(req,res)=>{
    const id = req.params.id
    const {name} = req.body
  
    try{
        const result = await updateNameById(name, id)
       
        res.status(200).json(result)
    }catch(error){
        res.status(400).json()
    }
})

router.delete('/deleteById/:id',async(req,res)=>{
    const id = req.params.id
  
    try{
        const result = await deleteById(id)
       
        res.status(200).json(result)
    }catch(error){
        res.status(400).json()
    }
})


export default router