import pool from '../database/pool.js';
import EventRepository from '../repositories/event.repository.js';

export default class EventService {
    constructor(){
        this.pool = pool;
        this.repository = new EventRepository(this.pool)
    }

    async list(){
        const events = await this.repository.list();
        return events;
    }

    async findById(event_id){
        const eventFound = await this.repository.findById(event_id);
        return eventFound;
    }

    async findByTitle(title){
        const eventsFound = await this.repository.findByTitle(title);
        return eventsFound;
    }

    async save(receivedEvent) {
        const createdEvent = await this.repository.save(receivedEvent);
        return createdEvent;
    }

    async update(receivedEvent) {
        const updatedEvent =  await this.repository.update(receivedEvent);
        return updatedEvent;
    }
}