import axios from "axios";

export const signup = async (userParams) => {
  const user = {
    user: userParams
  }
  const response = await axios.post('http://localhost:3000/users',user)
  return response
}