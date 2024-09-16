import {Router} from "express";
import { addBook,getAllBooks,getBookById,updateBook,deleteBooks } from "../controllers/bookController";
import {auth} from "../middleware/authMiddleware"
const router = Router();


router.post("/addBook",auth,addBook);
router.get("/",auth,getAllBooks);
router.get("/findBook/:id",auth,getBookById);
router.patch("/updateBook/:id",auth,updateBook);
router.delete("/delete/:id",auth,deleteBooks);

export default router;
