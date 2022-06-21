export const login = async (credential) => {
  const users = {
    user: credential
  }
  console.log(users)
  const response = await fetch('http://localhost:3000/users/sign_in',{
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(users)
  })
  return response.data
}

