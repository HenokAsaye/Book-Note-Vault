import { generateAuthToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

export const signup = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if the user already exists
        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.status(409).json({ message: "There is an account with this email" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const user = await User.create(email, hashedPassword);
        console.log("Created user:", user); // Log the user to check its structure

        // Generate the JWT token, ensuring correct field for ID
        const token = generateAuthToken(user);
        return res.status(201).json({ message: "Account created successfully", token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error while creating account" });
    }
};


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