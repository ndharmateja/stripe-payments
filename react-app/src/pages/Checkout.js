import React, { useState } from 'react'

const Checkout = () => {

  const [product, setProduct] = useState({
    name: 'Hat',
    description: 'Pug hat. A hat your pug will love.',
    images: [
      'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    ],
    amount: 799,
    currency: 'usd',
    quantity: 0,
  })

  const { name, amount, images, quantity } = product

  const changeQuantity = (increment) =>
    setProduct({
      ...product,
      quantity: Math.max(0, product.quantity + increment),
    })

  const handleClick = async () => {
    window.alert('you clicked')
  }

  return (
    <>
      <div>
        <h3>{name}</h3>
        <h4>Stripe amount: {amount}</h4>
        <img src={images[0]} alt='product' width='250px' />

        <button onClick={() => changeQuantity(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => changeQuantity(1)}>+</button>
      </div>

      <hr />

      <button onClick={handleClick} disabled={quantity < 1}>
        Start Checkout
      </button>
    </>
  )
}

export default Checkout
