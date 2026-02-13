import { loadStripe } from "@stripe/stripe-js";

const stripePromisse = loadStripe(process.env.STRIPE_SECRET_KEY)

export default stripePromisse