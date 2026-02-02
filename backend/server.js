import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from "path"; 
import { fileURLToPath } from "url";

import authRoutes from './routes/auth.route.js'
import productRoutes from './routes/product.route.js'
import { connectDB } from './lib/db.js';
import cartRoutes from './routes/cart.route.js'
import coupansRoutes from './routes/coupans.routes.js'
import  paymentRoutes  from "./routes/payment.routes.js";
import  analyticsRoutes  from "./routes/analytics.route.js";



dotenv.config();

const app = express();
const port = process.env.PORT || 5000

// ✅ Fix for __dirname in ES modules 
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

app.use(express.json({limit:"10mb"}))

app.use(cookieParser());

app.use('/api/auth',authRoutes)
app.use("/api/products", productRoutes);
app.use('/api/cart',cartRoutes)
app.use('/api/coupons',coupansRoutes)
app.use('/api/payments',paymentRoutes)
app.use('/api/analytics',analyticsRoutes)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});


}

app.listen(port, ()=>{
    console.log("server is running on the port 5000")
console.log("Connecting to:", process.env.MONGO_URI);

    connectDB()
})

// implement profile later
// export const getProfile = async (requestAnimationFrame,res) => {}
