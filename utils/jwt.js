import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export const generateAuthToken = (user)=>{
    try{
        const token = jwt.sign({id:user.id},process.env.JWT_KEY)
        return token
    }catch(error){
        console.log(error);
        throw error
    }
}