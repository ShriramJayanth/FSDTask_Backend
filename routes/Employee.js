import express from "express";
import { getAllEmployees,addEmployee} from "../controllers/Employee.js";

const router=express();

router.get("/employees",getAllEmployees);
router.post("/add",addEmployee);

export default router;