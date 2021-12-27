import pool from '../database/pool.js';
import UserRepositore from '../repositories/user.respositore.js';
import bcrypt from 'bcrypt'

export default class UserService {
    constructor(){
        this.pool = pool;
        this.repositorie = new UserRepositore(this.pool);
    }

    async save(userReceived) {
        userReceived.password = bcrypt.hashSync(userReceived.password,8)
        const createdUser = await this.repositorie.save(userReceived);
        return createdUser;
    }
}