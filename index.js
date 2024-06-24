import express from 'express'
import productRoutes from './routes/productos.routes.js'
import salesRoutes from './routes/ventas.routes.js'
import categoryRoutes from './routes/category.routes.js'
import userRoutes from './routes/usuarios.routes.js'
import 'dotenv/config'
import cors from 'cors'

const app = express()
app.use(express.json())

app.use(cors())

const port = process.env.PORT

app.listen(port, () =>{
    console.log(`Servidor levantado en puerto ${port}`)
})

app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/sales', salesRoutes)
app.use('/categories', categoryRoutes)
