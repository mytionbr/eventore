import axios from "axios";


const signinUser = (user_email, user_password) =>
  axios.post("/api/auth/signin", { user_email: user_email, user_password: user_password })

const registerUser = ({email,password,name}) =>
  axios.post("/api/users", {email,password,name})


const api = {
    signinUser,
    registerUser
}

export default api