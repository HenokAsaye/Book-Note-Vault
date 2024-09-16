import {db} from "../config/db"


export const findAllNote = async(userId)=>{
    const query = ("SELECT * FROM book_notes WHERE user_id=$1",[userId])

    try{
        const result = await db.query(query)
        if(result.rows.length ===0){
            return console.log(`There is no Note written by ${userId}`)
        }
        return result.rows
    }catch(error){
        console.log(error)
    }
}

export const createOrUpdateNote = async(book_id,user_id,review,rating)=>{
    const query = (`INSERT INTO book_notes(book_id,user_id,review,rating) 
        VALUES($1,$2,$3,$4) 
        ON CONFLICT(book_d,user_id)
        DO UPDATE book_notes SET review=$3 , rating = $4 , created_at = NOW()
        RETURNING *`)
    values = [book_id,user_id,review,rating]
    try{
        const result = db.query(query,values)
        if(result.length===0){
            return console.log(`There is no book_note with ${user_id}`)
        }
        return result.rows[0]
    }catch(error){
        console.log(error)
    }
}