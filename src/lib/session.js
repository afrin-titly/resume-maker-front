import axios from "axios"
import Cookies from "js-cookie"
export const userLogin = async (credential) => {
  const user = {
    user: credential
  }
  const response = await axios.post('http://localhost:3000/users/sign_in',user)
  const token = response.headers.authorization.split(' ')[1]
  Cookies.set('jwt', token)
  return response
}

export const userLogout = async() => {
  const token = Cookies.get('jwt')
  const response = axios.delete('http://localhost:3000/users/sign_out',
  {
    headers: {
      Authorization: token
    }
  })
  console.log(response)
}

