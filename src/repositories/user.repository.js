import moment from 'moment';
import { getNomalizedList } from '../util/event/getNomalizedEventData.js';
import hasPasswordChanged from '../util/hasPasswordChanged.js';
import Repository from './repository.js';

export default class UserRepository extends Repository{

      async save(receivedUser) {
        const created_at = moment().format('YYYY-MM-DD h:mm:ss');
        const updated_at = created_at;
    
        const query = `INSERT INTO USER_TABLE (name, email,password,created_at,updated_at) 
                VALUES ($1,$2,$3,$4,$5) RETURNING name, email, user_id;`;
    
        const params = [
            receivedUser.name,
            receivedUser.email,
            receivedUser.password,
            created_at,
            updated_at
        ];
    
        const result = await this.query(query, params);
        const createdUser = result[0];
        
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
        if(await hasPasswordChanged(receivedUser.password)){
          query = `UPDATE USER_TABLE SET name = $1, email = $2, password = $3, updated_at = $4 WHERE user_id = $5 RETURNING user_id, name, email`;
          params = [receivedUser.name, receivedUser.email, receivedUser.password, updated_at, receivedUser.user_id ];
        } else {
          query = `UPDATE USER_TABLE SET name = $1, email = $2, updated_at = $3 WHERE user_id = $4 RETURNING user_id, name, email`;
          params = [receivedUser.name, receivedUser.email, updated_at,receivedUser.user_id];
        }

        const updatedUser = await this.query(query, params);
        return updatedUser;
      }

     async findByName(name){
        const query = `SELECT name, email, user_id FROM USER_TABLE WHERE name iLIKE '%'||$1||'%'; `;
        const params = [name];

        const usersFound = await this.query(query, params);

        return usersFound;
      }

      async findById(user_id){
        const query = `SELECT name, email, user_id FROM USER_TABLE WHERE user_id = $1;`;
        const params = [user_id];

        const result = await this.query(query,params);
        const userFound = result[0];
        return userFound;
      }

      async findMyOwnEvents(user_id){
        const query = `SELECT EVENT_TABLE.event_id,EVENT_TABLE.location, EVENT_TABLE.title, EVENT_TABLE.description, EVENT_TABLE.start_at, EVENT_TABLE.end_at FROM EVENT_TABLE 
            INNER JOIN USER_TABLE ON EVENT_TABLE.user_id = USER_TABLE.user_id
            WHERE EVENT_TABLE.user_id = $1`;

        const params = [user_id];
        
        const events = await this.query(query,params);
          
        return events;
    }

    async findEventsRegistered(user_id){
      const query = `SELECT EVENT_TABLE.event_id, EVENT_TABLE.title,EVENT_TABLE.description, EVENT_TABLE.location, 
        EVENT_TABLE.start_at, EVENT_TABLE.end_at, USER_TABLE.user_id, USER_TABLE.name as user_name FROM EVENT_TABLE
        INNER JOIN ATTENDEE_TABLE ON ATTENDEE_TABLE.event_id = EVENT_TABLE.event_id
        INNER JOIN USER_TABLE ON USER_TABLE.user_id = ATTENDEE_TABLE.user_id
        WHERE USER_TABLE.user_id = $1`;

      const params = [user_id];

      const result = await this.query(query,params);
      const events = getNomalizedList(result);
      return events;
    }

    async findUserByEmail(user_email){
      
      const query = `SELECT * FROM USER_TABLE WHERE email = $1`;
      const params = [user_email];

      const result = await this.query(query,params);
      const user = result[0];
      return user;
    }
      
}