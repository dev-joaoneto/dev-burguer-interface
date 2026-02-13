import { loadStripe } from "@stripe/stripe-js";

const stripePromisse = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)

export default stripePromisse
