import pool from '../database/pool.js';
import AttendeeRepository from '../repositories/attendee.repository.js';

export default class AttendeeService {
    constructor(){
        this.pool = pool;
        this.repository = new AttendeeRepository(this.pool)
    }

    async save(receivedData){
        const registrationConfirmation = await this.repository.confirmRegistration(receivedData);
        /**
         * confirming that the user's registration for the event already exists
         */
        if(registrationConfirmation){
           throw new Error('The user has already registered for this event.');
        }

        const createdAttendee = await this.repository.save(receivedData);
        return createdAttendee;
    }
}