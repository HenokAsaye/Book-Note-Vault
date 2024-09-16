import { findAllNote,createOrUpdateNote } from "../models/bookNoteModel.js";


export const findNote = async(req,res)=>{
    const user_id = req.user.id
    try{
        const response = await findAllNote(user_id)
        if(!response){
            return res.status(404).json({message:"There is No Note found"})
        }
        return res.status(200).json({response:response})
    }catch(error){
        res.status(500).json({message:"Please Try Again",error:error})
    }
}
export const createOrUpdate = async(req,res)=>{
    const {book_id,rating,review} = req.body
    const userId = req.user.id
    try{
        if(!book_id|| !review){
            res.status(400).json({message:"Book_id and review are required!"})
        }
        const response =  await createOrUpdateNote(book_id,rating,review)
        if(!response){
            res.status(404).json({message:"File not found"})
        }
        return res.status(200).json({response:response})
    }catch(error){
        res.status(500).json({error:error})
    }


}