import React from 'react'

const CheckoutSuccess = () => {
  const url = window.location.href
  const sessionId = new URL(url).searchParams.get('session_id')
  return <h3>Checkout success! {sessionId}</h3>
}

export default CheckoutSuccess
