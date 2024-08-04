import { Router } from "express";
import { getImages } from "../controllers/img.controller.js";

const router = Router();

router.get("/", getImages);


const imgRoutes = (app) => app.use("/img", router);

export default imgRoutes;
