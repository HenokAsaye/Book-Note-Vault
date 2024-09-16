import {Router} from "Router";
import {findNote , createOrUpdate} from "../controllers/bookNoteController"
import {auth} from "../middleware/authMiddleware"

const router = Router();

router.get("/",auth,findNote);
router.post("/",auth,createOrUpdate);

export default router;