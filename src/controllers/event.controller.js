import EventService from '../services/event.service.js';

export const list = async (req, res) => {

  try {
    const eventService = new EventService();
    const events = await eventService.list();

    res.status(200).json(events);
  } catch (err) {
    console.log(err)
    res.status(400).json({
      message: err.message,
    });
  }
};

export const findById = async (req, res) => {
  try {
    const event_id = req.params["event_id"];
    const eventService = new EventService();

    const eventFound = await eventService.findById(event_id);

    res.status(200).json(eventFound);
  } catch (err) {
    
    res.status(400).json({
      message: err.message,
    });
  }
};

export const findByTitle = async (req, res) => {
  try {
    const title = req.params.title;

    const event = new EventService();

    const eventsFound = await event.findByTitle(title);

    res.status(200).json(eventsFound);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const save = async (req, res) => {
  try {
    const {
      title,
      location,
      description,
      start_at,
      end_at,
      user_id
    } = req.body;

    const eventService = new EventService();
    
    const receivedEvent = {
      title,
      location,
      description,
      start_at,
      end_at,
      user_id
    }
    
    const createdEvent = await eventService.save(receivedEvent);

    res.status(200).json(createdEvent);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const {
      title,
      event_id,
      location,
      description,
      start_at,
      end_at,
      user_id
    } = req.body;

    const event = new EventService();

    const receivedEvent = {
      title,
      event_id,
      location,
      description,
      start_at,
      end_at,
      user_id
    }

    const updatedEvent = await event.update(receivedEvent);

    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};


export const remove = async (req, res) => {
  try {
    const { event_id } = req.body;
    const eventService = new EventService();

    const removedEvent = await eventService.remove(event_id);

    res.status(200).json(removedEvent);
  } catch (err) {
    
    res.status(400).json({
      message: err.message,
    });
  }
};