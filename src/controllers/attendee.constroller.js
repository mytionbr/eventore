import AttendeeService from "../services/attendee.service.js";

export const register = async (req, res) => {
    try {
      const { user_id, event_id } = req.body;
  
      const attendeeService = new AttendeeService();
  
      const receivedData = {
        user_id,
        event_id,
      }
  
      const createdAttendee = await attendeeService.save(receivedData);
  
      res.status(201).json(createdAttendee);
    } catch (err) {
      res.status(400).json({
        message: err.message,
      });
    }
  };

export const unregister = async (req, res) => {
    try{
        const { attendee_id, event_id, user_id } = req.body;

        const attendeeService = new AttendeeService();

        const receivedData = {
            attendee_id,
            user_id,
            event_id
        };
        
        const removedRegister = await attendeeService.unregister(receivedData);
        res.status(200).json(removedRegister);

    } catch(err){
        res.status(400).json({
            message: err.message,
          });
    }
}