import pool from '../database/pool.js';
import EventRepositore from '../repositories/event.repositore.js';

export default class EventService {
    constructor(){
        this.pool = pool;
        this.repositorie = new EventRepositore(this.pool)
    }

    async list(){
        const events = await this.repositorie.list();

        return events;
    }

}