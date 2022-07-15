import React, { useContext } from "react";
import { useState } from "react";
import { signupUser } from "../lib/users"
import { userLogin, userLogout } from "../lib/session";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState({})

  const login = async (loginForm) => {
    const response = await userLogin(loginForm)
    setCurrentUser(response.data.user)
    return response
  }

  const signup = async (validUser) => {
    const response = await signupUser(validUser)
    return response
  }

  const logout = async () => {
    const response = await userLogout()
    return response
  }
  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )

}


