import moment from 'moment';
import hasPasswordChanged from '../util/hasPasswordChanged.js';

export default class UserRepository {
    constructor(pool) {
      this.pool = pool;
    }

    async query(query, params = undefined) {
        const { rows } = params
          ? await this.pool.query(query, params)
          : await this.pool.query(query);
        
        return rows;
      }

      async save(receivedUser) {
        const created_at = moment().format('YYYY-MM-DD h:mm:ss');
        const updated_at = created_at;
    
        const query = `INSERT INTO USER_TABLE (name, email,password,created_at,updated_at) 
                VALUES ($1,$2,$3,$4,$5) RETURNING name, email, user_idRETURNING *;`;
    
        const params = [
            receivedUser.name,
            receivedUser.email,
            receivedUser.password,
            created_at,
            updated_at
        ];
    
        const createdUser = await this.query(query, params);
        return createdUser;
      }

      async list (){
        const query = `SELECT USER_TABLE.user_id, USER_TABLE.name, USER_TABLE.email FROM USER_TABLE`;

        const users = await this.query(query);
        return users;
      }

      async update(receivedUser){
        let query, params;
        const updated_at =  moment().format('YYYY-MM-DD h:mm:ss');
        if(hasPasswordChanged(receivedUser.password)){
          query = `UPDATE USER_TABLE SET name = $1, email = $2, password = $3, updated_at = $4 RETURNING user_id, name, email`;
          params = [receivedUser.name, receivedUser.email, receivedUser.password, updated_at];
        } else {
          query = `UPDATE USER_TABLE SET name = $1, email = $2, updated_at = $3 RETURNING user_id, name, email`;
          params = [receivedUser.name, receivedUser.email, updated_at];
        }

        const updatedUser = await this.query(query, params);
        return updatedUser;
      }

}