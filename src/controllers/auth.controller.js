import AuthService from "../services/auth.service.js";
import generateToken from "../util/auth/generateToken.js";
import isPasswordCorrect from "../util/auth/isPasswordCorrect.js";
import isRegisteredUser from "../util/isRegisteredUser.js";
import jwt from 'jsonwebtoken'
import config from "../config/config.js";

export const signin = async (req,res)=>{
    try {
        const { user_email, user_password } = req.body;
       
        const receivedData = {
            user_email,
            user_password
        }

        const authService = new AuthService();

        const user = await authService.findUserByEmail(receivedData.user_email);
        
        if(isRegisteredUser(user)){
            if(isPasswordCorrect(receivedData.user_password,user.password)){
                const token = generateToken({
                    user_id: user.user_id,
                    name: user.name,
                    email: user.email
                });

                const response = {
                    user_id: user.user_id,
                    email: user.email,
                    name: user.name,
                    token: token
                }

                res.status(200).json(response);
            }else {
                res.status(401).json({
                    message: 'The password is incorrect'
                })
            }
        } else {
            res.status(401).json({
                message: 'User does not exist'
            })
        }
        
    } catch (err) {
        res.status(401).json({
            message: 'Unable to login'
        })
    }
}

export const isAuth = async (req, res, next) =>{
    const authorization = req.headers.authorization;

    try {
        if(authorization){
            const token = authorization.slice(7, authorization.length)
            jwt.verify(
                token,
                config.jwt_secret,
                (err, decode) =>{ 
                    if(err){
                        res.status(401).json({message: 'invalid token'})
                    } else {
                        req.auth = decode
                        next()
                    }
                }
            )
        } else {
            res.status(401).json({message: 'No token'})
        }    
    } catch (err) {
        res.status(401).json({message: 'No token'})
    }
}

export const hasAuthorization = (req, res, next) =>{
    const profile_id = req.body.user_id || req.params.user_id

    const isAuthorized = profile_id && req.auth && String(profile_id) === String(req.auth.user_id)
   
    if(!isAuthorized){
        res.status(403).json({
            message: "The user is not authorized"
        })
        return;
    }
    next()
}