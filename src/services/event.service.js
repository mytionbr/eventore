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

    async findById(event_id){
        const eventFound = await this.repositorie.findById(event_id);
        return eventFound;
    }

    async findByTitle(title){
        const eventsFound = await this.repositorie.findByTitle(title);
        return eventsFound;
    }

    async save(eventReceived) {
        const createdEvent = await this.repositorie.save(eventReceived);
        return createdEvent;
    }

}