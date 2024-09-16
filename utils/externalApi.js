import axios from "axios"
import dotenv from "dotenv"
dotenv.config();

export const fetchCover = async(ISBN)=>{
    const api_url =process.env.api_url;
    try{
        const response = axios.get(api_url)
        return response.data
    }catch(error){
        console.log(error);
        throw error
    }
}