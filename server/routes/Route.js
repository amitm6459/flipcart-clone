import express from "express";
import { userSignUp, userLogin } from "../controller/userController.js";
import { getProductById, getProducts } from "../controller/ProductController.js";
const router = express.Router();


router.post('/signup', userSignUp);
router.post('/login', userLogin)



router .get('/products',getProducts)

router.get('/product/:id', getProductById)

export default router;