import axios from "axios";


const signinUser = (user_email, user_password) =>
  axios.post("/api/auth/signin", { user_email: user_email, user_password: user_password })

const registerUser = ({email,password,name}) =>
  axios.post("/api/users", {email,password,name})

const findMyEvents = ({user_id,userInfo}) =>
  axios.get(`/api/users/${user_id}/events/own`,  {
    headers: { Authorization: `Bearer ${userInfo?.token}` },
  });

const findCommunityEvents = ({userInfo}) =>
axios.get(`/api/events`,  {
  headers: { Authorization: `Bearer ${userInfo?.token}` },
});

const findScheduleEvents = ({userInfo}) =>
axios.get(`/api/users/${userInfo?.user_id}/events/registered`,  {
  headers: { Authorization: `Bearer ${userInfo?.token}` },
});

const findUserProfile = ({userInfo}) =>
axios.get(`/api/users/${userInfo?.user_id}`,  {
  headers: { Authorization: `Bearer ${userInfo?.token}` },
});

const createEvent = ({event, userInfo}) =>
  axios.post(`/api/events`, event, {
    headers: { Authorization: `Bearer ${userInfo?.token}` },
  });

const updateEvent = ({event, userInfo}) =>
  axios.put(`/api/events`, event, {
    headers: { Authorization: `Bearer ${userInfo?.token}` },
  });

const removeEvent = ({event, userInfo}) =>
  axios.delete(`/api/events`, {
    headers: { Authorization: `Bearer ${userInfo?.token}` },
    data: event
  });

const registerEvent =  ({event, userInfo}) =>
axios.post(`/api/attendees`, event, {
  headers: { Authorization: `Bearer ${userInfo?.token}` },
});

const unregisterEvent = ({event, userInfo}) =>
  axios.delete(`/api/attendees`, {
    headers: { Authorization: `Bearer ${userInfo?.token}` },
    data: event
  });

  const updateUser =  ({user, userInfo}) =>
  axios.put(`/api/users`, user, {
    headers: { Authorization: `Bearer ${userInfo?.token}` },
  });

const api = {
    signinUser,
    registerUser,
    findMyEvents,
    findCommunityEvents,
    findScheduleEvents,
    findUserProfile,
    createEvent,
    updateEvent,
    removeEvent,
    registerEvent,
    unregisterEvent,
    updateUser
}

export default api