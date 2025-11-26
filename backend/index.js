import express from 'express'
dotenv.config()
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'

import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

let port = process.env.PORT || 8000

let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
 origin:["http://localhost:5173" ,"https://onecartmya.netlify.app","https://6925ec970bb2220008248822--onecartmya.netlify.app/"],
  //origin: ["https://onecartmya.netlify.app/"],
 credentials:true
}))

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
  next();
})

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)




app.listen(port,()=>{
    console.log("Hello From Server")
    connectDb()
})


