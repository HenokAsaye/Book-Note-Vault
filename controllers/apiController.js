import {fetchCover} from "../utils/externalApi"

export const getCover = async(req,res)=>{
    const {isbn} = req.params
    try{
        const cover = await fetchCover(isbn)
        res.status(200).json({cover:cover})
    }catch(error){
        res.status(500).json({message:"Please try Again!" })
    }
}

