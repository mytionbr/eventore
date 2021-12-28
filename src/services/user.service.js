import pool from '../database/pool.js';
import UserRepository from '../repositories/user.repository.js';
import passwordHashing from '../util/passwordHashing.js';
import hasPasswordChanged from '../util/hasPasswordChanged.js';

export default class UserService {
    constructor(){
        this.pool = pool;
        this.repository = new UserRepository(this.pool);
    }

    async save(receivedUser) {
        receivedUser.password = passwordHashing(receivedUser.password)
        const createdUser = await this.repository.save(receivedUser);
        return createdUser;
    }

    async list(){
        const users = await this.repository.list();
        return users;
    }

    async update(receivedUser){
        if(hasPasswordChanged(receivedUser.password)){
            receivedUser.password = passwordHashing(receivedUser.password);   
        }
       const updatedUser = await this.repository.update(receivedUser);
       return updatedUser;
    }

    async findByName(name){
        const usersFound = await this.repository.findByName(name);
        return usersFound;
    }

    async findById(user_id){
        const userFound = await this.repository.findById(user_id);
        return userFound;
    }

    async findMyOwnEvents(user_id){
        const events = await this.repository.findMyOwnEvents(user_id);
        return events;
    }
    
}