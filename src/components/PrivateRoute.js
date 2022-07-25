import React from 'react'
import {Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({route}) => {
  const { currentUser } = useAuth();
  return (
    currentUser ? route : <Navigate to="/login"/>
  )
}

export default PrivateRoute