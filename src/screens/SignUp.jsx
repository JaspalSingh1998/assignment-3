import React from 'react'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
  const {createUser} = UserAuth();
  return (
    <div>SignUp</div>
  )
}

export default SignUp