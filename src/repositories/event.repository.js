import {
  getNomalized,
  getNomalizedList,
} from '../util/event/getNomalizedEventData.js';
import moment from 'moment';
export default class EventRepository {
  constructor(pool) {
    this.pool = pool;
  }

  async query(query, params = undefined) {
    const { rows } = params
      ? await this.pool.query(query, params)
      : await this.pool.query(query);
    
    return rows;
  }

  async list() {
   
    const query = `SELECT EVENT_TABLE.event_id, EVENT_TABLE.title, EVENT_TABLE.location, EVENT_TABLE.description, EVENT_TABLE.start_at,
    EVENT_TABLE.end_at, EVENT_TABLE.created_at, EVENT_TABLE.updated_at, EVENT_TABLE.user_id, USER_TABLE.name as user_name, USER_TABLE.email as user_email FROM EVENT_TABLE INNER JOIN USER_TABLE ON USER_TABLE.user_id = EVENT_TABLE.user_id;`;

    const eventsFound = await this.query(query);
    
    const result = getNomalizedList(eventsFound);

    return result;
  }

  async findById(event_id) {
    const query = `SELECT EVENT_TABLE.event_id, EVENT_TABLE.title, EVENT_TABLE.location, EVENT_TABLE.description, EVENT_TABLE.start_at,
    EVENT_TABLE.end_at, EVENT_TABLE.created_at, EVENT_TABLE.updated_at, EVENT_TABLE.user_id, USER_TABLE.name as user_name, USER_TABLE.email as user_email FROM EVENT_TABLE INNER JOIN USER_TABLE ON USER_TABLE.user_id = EVENT_TABLE.user_id WHERE event_id = $1;`;

    const params = [event_id];

    const result = await this.query(query, params);
  
    const nomalizedEvent = getNomalized(result[0]);
    return nomalizedEvent;
  }

  async findByTitle(title) {
    const query = `SELECT EVENT_TABLE.event_id, EVENT_TABLE.title, EVENT_TABLE.location, EVENT_TABLE.description, EVENT_TABLE.start_at,
    EVENT_TABLE.end_at, EVENT_TABLE.created_at, EVENT_TABLE.updated_at, EVENT_TABLE.user_id, USER_TABLE.name as user_name, USER_TABLE.email as user_email FROM EVENT_TABLE INNER JOIN USER_TABLE ON USER_TABLE.user_id = EVENT_TABLE.user_id WHERE EVENT_TABLE.title iLIKE '%'||$1||'%';`;

    const params = [title];

    const eventsFound = await this.query(query, params);

    if (eventsFound) {
      const result = getNomalizedList(eventsFound);

      return result;
    } else {
      return eventsFound;
    }
  }

  async save(receivedEvent) {
    const created_at = moment().format('YYYY-MM-DD h:mm:ss');
    const updated_at = created_at;

    const query = `INSERT INTO EVENT_TABLE (title, location,
    description, start_at, end_at, created_at, updated_at, user_id) 
    VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *;`;

    const params = [
      receivedEvent.title,
      receivedEvent.location,
      receivedEvent.description,
      receivedEvent.start_at,
      receivedEvent.end_at,
      created_at,
      updated_at,
      receivedEvent.user_id,
    ];

    const createdEvent = await this.query(query, params);
    return createdEvent;
  }

  async update(receivedEvent){
    const query = `UPDATE EVENT_TABLE SET title = $1, location = $2, description = $3, start_at = $4, end_at = $5 WHERE event_id = $6 RETURNING *;`
    const params = [
      receivedEvent.title,
      receivedEvent.location,
      receivedEvent.description,
      receivedEvent.start_at,
      receivedEvent.end_at,
      receivedEvent.user_id
    ];

    const result = await this.query(query,params);
    const updatedEvent = result[0];
    return updatedEvent;
  }
}
