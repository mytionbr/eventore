import Event from '../../models/Event.js';

export function getNomalized(result) {
 
  if(result){
    let event = new Event();

  event.title = result.title;
  event.event_id = result.event_id;
  event.location = result.location;
  event.description = result.description;
  event.start_at = result.start_at;
  event.end_at = result.end_at;
  event.created_at = result.created_at;
  event.updated_at = result.updated_at;
  event.user.name = result.user_name;
  event.user.email = result.user_email;
  event.user.user_id = result.user_id;
  return event;
  }
  else {
    return result
  }
  
}

export function getNomalizedList(result) {
  if (result && result.length > 0) {
    const results = result.map((item) => getNomalized(item));
    return results;
  } else {
    return result;
  }
}
