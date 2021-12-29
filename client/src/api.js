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



const api = {
    signinUser,
    registerUser,
    findMyEvents,
    findCommunityEvents
}

export default api