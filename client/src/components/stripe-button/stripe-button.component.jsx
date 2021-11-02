import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IqnH5E7qUXuxlM8eZePr9ItuXDIApDoAiz9GBiSWLFC5g1QGasbC9pIu3CwzkycaPwM5QUC8ghq75HYY7MQXyw000PURmVOwU';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was an issure with your payment. Please sure you use the provided credit card'
            );
        })
    }

    return (
        <StripeCheckout 
            label= 'Pay Now'
            name='BLACKHOLEGARAGE'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};


export default StripeCheckoutButton;