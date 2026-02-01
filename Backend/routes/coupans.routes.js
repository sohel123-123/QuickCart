import express from 'express'
import { protectRoute} from "../middleware/auth.middleware.js";
import {validateCoupon,getCoupon} from '../controller/coupan.controller.js'

const router = express.Router();

router.get("/",protectRoute,getCoupon);

router.post("/validate",protectRoute,validateCoupon);

export default router;
