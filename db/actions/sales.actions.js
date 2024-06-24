import { connectToDatabase } from "../connection.js"
import Sales from "../schemas/sales.schema.js"

export const createSale = async({products, total, user})=>{
    try{
        await connectToDatabase()
        const res = await Sales.create({products, total, user})

        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}
export const findById = async(id)=>{
    try{
        await connectToDatabase()
        const res = await Sales.findById(id).populate({path:"products"})

        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}

export const findAll = async()=>{
    try{
        await connectToDatabase()
        const res = await Sales.find().populate({path:"products"})

        return JSON.parse(JSON.stringify(res))
    }catch(error){
        console.log(error)
    }
}