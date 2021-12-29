import axios from "axios";


const signinUser = (user_email, user_password) =>
  axios.post("/api/auth/signin", { user_email: user_email, user_password: user_password })

const api = {
    signinUser
}

export default api