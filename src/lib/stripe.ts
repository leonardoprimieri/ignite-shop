import Stripe from "stripe"

export const stripeApi = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
  appInfo: {
    name: "Ignite Shop do Leo"
  }
})
