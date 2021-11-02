import React from 'react';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors.js';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, TestWarningContianer, ButtonContainer } from './checkout.styles.jsx';

import { useSelector } from 'react-redux';

const CheckputPage = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    return(
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem
                        key={cartItem.id} 
                        cartItem={cartItem}
                    />)
            }
            <TotalContainer>
                <span>TOTAL: ${total}</span>
            </TotalContainer>
            <TestWarningContianer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </TestWarningContianer>
            <ButtonContainer price={total} />
        </CheckoutPageContainer>
    )
};

export default CheckputPage;