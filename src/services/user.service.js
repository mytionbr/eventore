import pool from '../database/pool.js';
import UserRepository from '../repositories/user.repository.js';
import bcrypt from 'bcrypt'

export default class UserService {
    constructor(){
        this.pool = pool;
        this.repository = new UserRepository(this.pool);
    }

    async save(receivedUser) {
        // hashing the user's password
        receivedUser.password = bcrypt.hashSync(receivedUser.password,8)
        const createdUser = await this.repository.save(receivedUser);
        return createdUser;
    }

    async list(){
        const users = await this.repository.list();
        return users;
    }
}