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