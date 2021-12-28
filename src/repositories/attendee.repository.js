import moment from 'moment';
import Repository from './repository.js';

export default class AttendeeRepository extends Repository {
   
    async save(receivedData){
        const created_at = moment().format('YYYY-MM-DD h:mm:ss');
        
        const query = `INSERT INTO ATTENDEE_TABLE (user_id, event_id, created_at) 
            VALUES ($1, $2, $3) RETURNING *;`;
    
        const params = [
            receivedData.user_id,
            receivedData.event_id,
            created_at
        ];

        const result = await this.query(query,params);
        const createdAttendee = result[0];
        return createdAttendee;
    }

    async confirmRegistration(receivedData){
        const query = `SELECT * FROM ATTENDEE_TABLE WHERE user_id = $1 AND event_id = $2;`;
        const params = [
            receivedData.user_id,
            receivedData.event_id
        ];

        const result = await this.query(query,params);
        return this.alreadyExists(result);
    }

    async unregister(receivedData){
        const query = `DELETE FROM ATTENDEE_TABLE WHERE attendee_id = $1 RETURNING *; `
        const params = [
            receivedData.attendee_id
        ]

        const result = await this.query(query,params);
        const removedAttendee = result[0];
        return removedAttendee;
    }

    alreadyExists(result){
        return result[0] ? true : false;
    }

}