import EventService from '../services/event.service.js';

export const list = async (req, res) => {
  try {
    const event = new EventService();
    const events = await event.list();

    res.status(200).json(events);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const findById = async (req, res) => {
  try {
    const event_id = req.params["event_id"];
    const event = new EventService();

    const eventFound = await event.findById(event_id);

    res.status(200).json(eventFound);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export const findByTitle = async (req, res) => {
  try {
    const { title } = req.body;

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
      event_id,
      location,
      description,
      start_at,
      end_at,
      creted_at,
      updated_at,
      user_id,
    } = req.body;

    const event = new EventService();

    const eventReceived = {
      title,
      event_id,
      location,
      description,
      start_at,
      end_at,
      creted_at,
      updated_at,
      user_id
    }

    const createdEvent = await event.save(eventReceived);

    res.status(200).json(createdEvent);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
