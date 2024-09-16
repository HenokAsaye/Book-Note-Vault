import *  as bookModel from "../models/bookModel.js"


export const addBook = async(req,res)=>{
    const {title,author,genre,cover_url} = req.body

    try{
        if(!title || !genre){
            return res.status(400).json({message:"Title And Author of thr book is required"})
        }
        const newBook = await bookModel.addBooks({title,author,genre,cover_url});
        res.status(200).json({message:`The Book with title${title} is added successfully`,
            data:newBook
        })
    }catch(error){
        console.log(error);
        res.status(500).json({message:'Please Try Again'})
    }
}
export const getAllBooks = async (req,res)=>{
    try{
        const data =  await bookModel.getAllBooks();
        if(data.length === 0){
            return res.status(404).json({message:"There is no book to Display"})
        }
        res.status(200).json({data:data})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Please Try Again!"})
    }
}
export const getBookById = async(req,res)=>{
    const {id} = req.params;
    try{
        const data = await bookModel.getBooksById(id);
        if(!data){
            res.status(404).json({message:"File Not Found"})
        }
        res.status(200).json({data:data})

    }catch(error){
        console.log(error)
        res.status(500).json({message:"Please Try Again"})}
}
export const updateBook = async(req,res)=>{
    const id = req.params
    const {title,author,genre} = req.body
    try{
        const data = await bookModel.updateBooks(id,{title,author,genre});
        if(!data){
            res.status(404).json({message:"Book Not Found"})
        }
        res.status(200).json({data:data})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Please Try Again"})
    }
}

export const deleteBooks = async(req,res)=>{
    const {id} = req.params
    try{
        const deleteBook = await bookModel.deleteBooks(id);
        if(!deleteBook){
            res.status(404).json({message:"Book Not Found"})
        }
        res.status(200).json({deleteBook:deleteBook})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Please Try Again"})
    }
}

