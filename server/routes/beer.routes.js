import express from "express";
import { getAllBeers, getBeer, addBeer, editBeer, deleteBeer } from "../controllers/beer.controllers.js";
import { protect, admin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router
    .route("/")
    .get(getAllBeers)
    .post(protect,admin, addBeer)


router
    .route("/:id")
    .get(getBeer)
    .patch(protect, admin, editBeer)
    .delete(protect, admin, deleteBeer)

export default router