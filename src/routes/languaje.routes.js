import { Router } from "express";
import { getLanguajes } from "../controllers/languaje.controller.js";

const router = Router();

router.get("/", getLanguajes);

const languajeRoutes = (app) => app.use("/languaje", router);

export default languajeRoutes;