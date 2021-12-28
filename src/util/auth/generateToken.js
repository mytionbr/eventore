import jwt from 'jsonwebtoken';
import config from '../../config/config.js'

export default function ({user_id, name, email}){
    return jwt.sign(
        {
            user_id: user_id,
            name: name,
            email: email, 
        },
        config.jwt_secret,
        {
            expiresIn: '30d'
        }
    )
}