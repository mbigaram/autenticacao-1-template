import express from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { ProductController } from "../controller/ProductController"
import { ProductDatabase } from "../database/ProductDatabase"
import { IdGeneration } from "../services/IdGeneration"
import { TokenManager } from "../services/TokenManager"

export const productRouter = express.Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new IdGeneration()
    )
)

productRouter.get("/", productController.getProducts)
productRouter.post("/", productController.createProduct)