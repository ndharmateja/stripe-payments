import React from 'react'
import { auth } from '../firebase'

const SignOut = ({ user }) => {
  return (
    user && <button onClick={() => auth.signOut()}>Sign Out {user.uid}</button>
  )
}

export default SignOut
