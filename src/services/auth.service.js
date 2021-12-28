import pool from '../database/pool.js';
import UserRepository from '../repositories/user.repository.js';

export default class AuthService{
    constructor(){
        this.pool = pool;
        this.repository = new UserRepository(this.pool)
    }

    async findUserByEmail(user_email){
        const user = await this.repository.findUserByEmail(user_email);
        return user;
    }


}