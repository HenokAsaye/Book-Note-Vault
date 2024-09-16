import {Router} from "express";
import {findNote , createOrUpdate} from "../controllers/bookNoteController.js"
import {auth} from "../middleware/authMiddleware.js"

const router = Router();

router.get("/",auth,findNote);
router.post("/",auth,createOrUpdate);

export default router;