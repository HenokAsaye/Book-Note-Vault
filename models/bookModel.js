import db from "../config/db"

export const addBooks = async (bookdata)=>{
    const {title,author,genre,cover_url,created_at} = bookdata

    const query = (`INSERT INTO books (title,author,genre,cover_url,created_at) 
        VALUES ($1,$2,$3,$4,NOW()) RETURNING ;`)

    const values = [title,author,genre,cover_url,created_at]

    try{
        const result  = await db.query(query,values)
        const data = result.rows[0]
        return data
    }catch(error){
        console.log("Error adding book",error)
        throw error
    }
}

export const getAllBooks = async()=>{
    const query = ("SELECT * FROM books")
    try{
        const result  = await db.query(query)
        if(result.rowCount.length === 0){
            return "There is no bookto display"
        }
        return result.rows
    }catch(error){
        console.log(error)
        throw error
    }
}
export const getBooksById = async(id)=>{
    const query = ("SELECT * FROM books WHERE id=$1",[id])
    try{
        const result = await db.query(query)
        return result.rows[0]

    }catch(error){
        console.log("Error occured while fetching the data",error);
        throw error
    }
    
}

export const updateBooks = async(id,bookData)=>{
    const {title,author,genre,cover_url} = bookData;
    const query = (`
        UPDATE books SET title=$1 author=$2 genre=$3 cover_url=$4 updated_at NOW() WHERE id=$5`)
    const values = [title,author,genre,cover_url,id]
    try{
        const result = await db.query(query,values);
        return result.rows[0]
    }catch(error){
        console.log(error)
        throw error;
    }
}
export const deleteBooks = async(id)=>{
    const query = ("DELETE FROM books WHERE id = $1",[id])
    try{
        const result = await db.query(query)
        result.rows[0]
    }catch(error){
        console.log(error)
        throw error;
    }
    
}