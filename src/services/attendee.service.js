import pool from '../database/pool.js';
import AttendeeRepository from '../repositories/attendee.repository.js';

export default class AttendeeService {
    constructor(){
        this.pool = pool;
        this.repository = new AttendeeRepository(this.pool)
    }

    async save(receivedData){
        const registrationConfirmation = await this.repository.confirmRegistration(receivedData);
    
        if(registrationConfirmation){
           throw new Error('The user has already registered for this event.');
        }

        const createdAttendee = await this.repository.save(receivedData);
        return createdAttendee;
    }

    async unregister(receivedData){
        const registrationConfirmation = await this.repository.confirmRegistration(receivedData);
        
        if(!registrationConfirmation){
           throw new Error('User is not registered for this event');
        }

        const removedRegister = await this.repository.unregister(receivedData);
        return removedRegister;
    }

    async findByEvent(event_id){
        
        const attenddes = await this.repository.findByEvent(event_id);
        return attenddes;
    }

    
}