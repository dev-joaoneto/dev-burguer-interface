import { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles.css';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';

export default function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    state: { clientSecret },
  } = useLocation();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe ou Elements com falha, tente novamente.');
      return;
    }

    setIsLoading(true);

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setMessage(submitError.message);
      setIsLoading(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      redirect: 'if_required',
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent?.status === 'succeeded') {
      try {
        const products = cartProducts.map((product) => {
          return { id: product.id, quantity: product.quantity, price: product.price };
        });
        const { status } = await api.post(
          '/orders',
          { products },
          {
            validateStatus: () => true,
          },
        );
        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
            
          }, 3000);

          clearCart();
          toast.success('Pagamento realizado com sucesso!');
        } else if (status === 400) {
          toast.error('Falha ao realizar o seu pagamento!');
        } else {
          throw new Error();
        }
      } catch (_error) {
        toast.error('😭 Falha no Sistema! Tente novamente');
      }
    } else {
      navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'accordion',
  };

  return (
    <div className='container'>
      <form id='payment-form' onSubmit={handleSubmit}>
        <PaymentElement id='payment-element' options={paymentElementOptions} />
        <button
          type='submit'
          disabled={isLoading || !stripe || !elements}
          id='submit'
          className='button'
        >
          <span id='button-text'>
            {isLoading ? <div className='spinner' id='spinner'></div> : 'Pay now'}
          </span>
        </button>

        {message && <div id='payment-message'>{message}</div>}
      </form>
    </div>
  );
}
