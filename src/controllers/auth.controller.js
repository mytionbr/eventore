import AuthService from "../services/auth.service.js";
import generateToken from "../util/auth/generateToken.js";
import isPasswordCorrect from "../util/auth/isPasswordCorrect.js";
import isRegisteredUser from "../util/isRegisteredUser.js";

export const signin = async (req,res)=>{
    try {
        const { user_email, user_password } = req.body;

        const receivedData = {
            user_email,
            user_password
        }

        console.log(user_email,user_password)

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

