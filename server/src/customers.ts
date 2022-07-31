import { stripe } from './'
import { db } from './firebase'
import Stripe from 'stripe'

export const getOrCreateCustomer = async (
  userId: string,
  params?: Stripe.CustomerCreateParams
) => {
  const userSnapshot = await db.collection('users').doc(userId).get()
  const { stripeCustomerId, email } = userSnapshot.data()

  // if stripe customer id doesn't exist
  // we create it
  if (!stripeCustomerId) {
    const customer = await stripe.customers.create({
      email,
      metadata: {
        firebaseUid: userId,
      },
      ...params,
    })

    await userSnapshot.ref.update({ stripeCustomerId: customer.id })
    return customer
  }

  // if it exists we return the stripe customer
  const customer = (await stripe.customers.retrieve(
    stripeCustomerId
  )) as Stripe.Customer
  return customer
}
