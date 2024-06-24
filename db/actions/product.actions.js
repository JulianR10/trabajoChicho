import { connectToDatabase } from "../connection.js"
import Product from "../schemas/product.schema.js"

export const createProd = async({name, desc, price, stock, category})=>{
    try{
        await connectToDatabase()
        const res = await Product.create({name, desc, price, stock,category})
        
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findAll = async()=>{
    try{
        await connectToDatabase()
        const res = await Product.find().populate({path:"category"})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findById = async(id)=>{
    try{
        await connectToDatabase()
        const res = await Product.findById(id).populate({path:"category"})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findByCategory = async(category)=>{
    try{
        await connectToDatabase()
        const res = await Product.find({category}).populate({path:"category"})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const updateNameById = async(name, id)=>{
    try{
        await connectToDatabase()
        const res = await Product.findByIdAndUpdate(id,{name})
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const deleteById = async(id)=>{
    try{
        await connectToDatabase()
        const res = await Product.findByIdAndDelete(id)
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

