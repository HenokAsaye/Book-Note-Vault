import { generateAuthToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

export const signup = async(req,res)=>{
    const {email,password} = req.body
    try{
        const existingUser = await User.findByEmail(email);
        if(existingUser){
          return  res.status(409).json({message:"There is an Account with this email"})
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create(email,hashedPassword)
        const token =  generateAuthToken(newUser)
        res.status(201).json({message:"Account created successfully",token:token})
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Error While creating Account"});

    }
}

export const login  = async(req,res)=>{
    const {email,password} = req.body
    try{
        const user = await User.findByEmail(email);
        if(!user){
            return res.status(404).json({message:"Invalid Email or Password"})
        }
        const passwordMatch = await bcrypt.compare(password,user.password)
        if(!passwordMatch){
            return res.status(401).json({message:"Invalid Email or Password"})
        }
        const token = generateAuthToken(user)
        res.status(200).json({message:"You have successfully Loged in",token:token})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Please Try Again"})
    }
}