import moment from 'moment';

export default class UserRepositore {
    constructor(pool) {
      this.pool = pool;
    }

    async query(query, params = undefined) {
        const { rows } = params
          ? await this.pool.query(query, params)
          : await this.pool.query(query);
        
        return rows;
      }

      async save(userReceived) {
        const created_at = moment().format('YYYY-MM-DD h:mm:ss');
        const updated_at = created_at;
    
        const query = `INSERT INTO USER_TABLE (name, email,password,created_at,updated_at) 
                VALUES ($1,$2,$3,$4,$5) RETURNING name, email, user_idRETURNING *;`;
    
        const params = [
            userReceived.name,
            userReceived.email,
            userReceived.password,
            created_at,
            updated_at
        ];
    
        const createdUser = await this.query(query, params);
        return createdUser;
      }
}