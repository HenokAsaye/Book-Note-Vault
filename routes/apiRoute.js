import {Router} from "express"
import {getCover} from "../controllers/apiController.js"

const router = Router();

router.get("/api/cover",getCover)