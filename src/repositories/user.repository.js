import moment from 'moment';

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
        const query = `SELECT USER_TABLE.user_id ,USER_TABLE.name, USER_TABLE.email FROM USER_TABLE`;

        const users = await this.query(query);
        return users;
      }
}