import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51IzwGLFnJ4yfpljJTHPU59obJepP2pcxrTtjd6KeubE42FlJhFsVdzIO0cRo00M3sFixsanQpWt7jhZ90NE12Wcb00DG7mk8Rv';

    const onToken = token => {
        console.log('token', token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Go Shop Inc.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={priceInCents}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;