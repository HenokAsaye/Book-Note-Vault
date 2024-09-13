import axios from "axios"

export const fetchCover = async(ISBN)=>{
    const api_url =( `https://covers.openlibrary.org/books/api?bibskey=ISBN:${ISBN}&format=json&jscmd=data;`)
    try{
        const response = axios.get(api_url)
        return response.data
    }catch(error){
        console.log(error);
        throw error
    }
}