import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

export const auth = (req,res,next)=>{
    const token = req.header["authorization"];
    if(!token){
        return res.status(401).send("empty token")
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_KEY)
        req.user = decoded;
        next()
    }catch(error){
        res.status(500).send(error.message);
    }
};

