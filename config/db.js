import pg from "pg";
import dotenv from "dotenv"

dotenv.config();


const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"book_note_db",
    password:process.env.db_password,
    port:process.env.PORT
})




export default db;