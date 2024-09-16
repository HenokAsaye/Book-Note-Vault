import axios from "axios"

export const fetchCover = async(ISBN)=>{
    const api_url =( `https://covers.openlibrary.org/b/ISBN/${ISBN}-L.jpg`)
    try{
        const response = axios.get(api_url)
        return response.data
    }catch(error){
        console.log(error);
        throw error
    }
}