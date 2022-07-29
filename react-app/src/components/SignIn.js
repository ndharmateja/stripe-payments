import React from 'react'
import { auth, db } from '../firebase'
import firebase from 'firebase/app'

const SignIn = () => {
  const signIn = async () => {
    const credential = await auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    const { uid, email } = credential.user
    db.collection('users').doc(uid).set({ email }, { merge: true })
  }

  return <button onClick={signIn}>Sign In With Google</button>
}

export default SignIn
