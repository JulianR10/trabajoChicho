import { connectToDatabase } from "../connection.js"
import Category from "../schemas/category.schema.js"

export const createCategory = async(name)=>{
    try{
        await connectToDatabase()
        const res = await Category.create({name})
        
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findAll = async()=>{
    try{
        await connectToDatabase()
        const res = await Category.find()
        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}
