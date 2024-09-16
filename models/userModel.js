import db from "../config/db.js";


class User{
    static async findByEmail(email){
        const query = ("Select  email FROM users WHERE email=$1",[email])
        try{
            const result = await db.query(query);
            return result.rows[0]
        }catch(error){
            console.log("Error is occurred",error);
            throw new error("query Failed")
        }
        
    }
    static async create(email,password){
        const query = (`INSERT INTO users (email,password) VALUES($1,$2)`)
        const values = [email,password]

        try{
            const result = await db.query(query,values)
            return result.rows[0]
        }catch(error){
            console.log(error);
            throw new error("query Failed");
        }
    }
    static async update(email,password){
        const query = ( 'UPDATE users SET password = $1 WHERE email= $2 RETURNING *',[password,email])

        try{
            const result = db.query(query);
            return result.rows[0]
        }catch(error){
            console.log(error)
            throw new error("query Failed")
        }
    }
    static async delete(id){
        const query = ("DELETE FROM users WHERE id=$1",[id]);
        try{
            const result = await db.query(query)
            return result.rows[0]
        }catch(error){
            console.log(error)
            throw new error("query failed")
        }
    }
}
export default User;