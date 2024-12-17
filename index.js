import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import employeeRoutes from "./routes/Employee.js"

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());

app.use("/employee",employeeRoutes);

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log("Server running on port:3002");
})