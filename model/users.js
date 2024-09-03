import { connection as db} from '../config/index.js'
import {compare, hash} from 'bcrypt'

import { createToken } from '../middleware/authenticateUser.js'


class User {
    static fetchUsers(req, res) {
        try {
            const strQry = `
            SELECT * 
            FROM Users;`
            db.query(strQry, (err, results) => {
                if (err) throw new Error (err.message);
                res.json({
                    status: res.statusCode,
                    results: results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                message: e.message 
            })
        }
        
    }

    static fetchOneUser(req, res) {
        try {
            const strQry = `
            SELECT * 
            FROM Users
            WHERE userID = ${req.params.id};`
            db.query(strQry, (err, results) => {
                if (err) throw new Error (`Unable to fetch this users`);
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                message: e.message 
            })
        }
    }

    static async registerUser(req, res){
        try {
            let data = req.body
            data.userPwd = await hash(data.userPwd,12)
                // payload
                console.log('hey ther');
                
                let user = {
                    userEmail: data.userEmail,
                    userPwd: data.userPwd
                }
                let strQry = `
                INSERT INTO Users 
                SET ?; 
                `
                db.query(strQry, [data], (err) => {
                    if (err) {
                        res.json({
                            status:res.statusCode,
                            msg: 'This email address already exists'
                        })
                    }   else {
                        const token = createToken(user)
                        res.json({
                            token,
                            msg:'You are now registered'
                        })
                    }
                })
            
        } catch (err) {
            console.log(err);
        }
    }

    static async updateUser(req,res) {
        try {
            let data = req.body
            if (data.userPwd) {
                data.userPwd = await hash(data.userPwd, 12)
            }
            const strQry = `
            UPDATE Users
            SET ?
            WHERE userID = ${req.params.id}
            `
            db.query(strQry, [data], (err) => {
    
                if (err) throw new Error (err);
                res.json({
                    status: res.statusCode,
                    msg: 'User updated successfully'
                })
            })
        } catch (e) {
            res.json({
                staus:400,
                msg:e.message
            })
        }
    }

    static deleteUser(req,res) {
        try {
            const strQry = `
            DELETE FROM Users WHERE userID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Error deleting')
                    res.json({
                status: res.statusCode,
                    msg: 'User deleted successfully'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    static loginUser(req,res) {
        try {
            const { userEmail, userPwd} = req.body
            const strQry = `
            SELECT *
            FROM Users 
            WHERE userEmail = '${userEmail}'
            `
            db.query(strQry, async (err, result) => {
                if (err) throw new Error('To login, please try again')
                if (!result?.length) {
                    res.json(
                        {
                            status: 401,
                            msg: 'Invalid email'
                        }
                    )
                } else {
                    const isValidPass = await compare
                    (userPwd, result[0].userPwd)
                    if (isValidPass) {
                        const token = createToken({
                            userEmail,
                            userPwd
                        })
                        res.json({
                            status: res.statusCode,
                            token,
                            result: result[0]
                        })
                    } else {
                        res.json(
                            {
                                status: 401,
                                msg: 'Invalid password'
                            }
                        )
                    }
                } 
            })
        } catch (e) {
            
        }
    }

    


}

export{
    User
}