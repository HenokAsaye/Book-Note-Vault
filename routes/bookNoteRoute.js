import {Router} from "Router";
import {findNote , createOrUpdate} from "../controllers/bookNoteController"
import {auth} from "../middleware/authMiddleware"

const router = Router();

router.get("/Note",auth,findNote);
router.post("/updateNote",auth,createOrUpdate);

export default router;