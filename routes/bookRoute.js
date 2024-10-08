import {Router} from "express";
import { addBook,getAllBooks,getBookById,updateBook,deleteBooks } from "../controllers/bookController.js";
import {auth} from "../middleware/authMiddleware.js"
const router = Router();


router.post("/",auth,addBook);
router.get("/",auth,getAllBooks);
router.get("/",auth,getBookById);
router.patch("/",auth,updateBook);
router.delete("/",auth,deleteBooks);

export default router;
