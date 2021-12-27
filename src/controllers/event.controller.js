import EventService from '../services/event.service.js';

export const list = async (req,res) => {
    try {
        const event = new EventService();
        const events = await event.list();

        res.status(200).json(events);
    } catch(err){
        res.status(400).json({
            message: err.message
        })
    }
    


}