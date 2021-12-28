import bcrypt from 'bcrypt'

export default function (receivedPassword, savedPassword){
    return bcrypt.compareSync(receivedPassword, savedPassword);
}