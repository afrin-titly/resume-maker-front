import axios from "axios"
import Cookies from "js-cookie"
export const login = async (credential) => {
  const user = {
    user: credential
  }
  const response = await axios.post('http://localhost:3000/users/sign_in',user)
  const token = response.headers.authorization.split(' ')[1]
  Cookies.set('jwt', token)
  return response
}

