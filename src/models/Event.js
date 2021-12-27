export default class Event {
    constructor(){
        this.event_id = undefined
        this.title = undefined
        this.location = undefined
        this.description = undefined
        this.start_at = undefined
        this.end_at = undefined
        this.created_at = undefined
        this.updated_at = undefined
        this.user = {
            name:undefined,
            email:undefined,
            user_id: undefined
        }
    }
}