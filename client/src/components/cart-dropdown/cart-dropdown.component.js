import React from 'react';
import { CartDropdownContainer, CartItemsContainer, EmptyMessage, Button } from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { useSelector, useDispatch } from 'react-redux';

import { useHistory } from 'react-router';

const CartDropdown = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? 
                    (
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    ) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItemsContainer>
            <Button onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
                }}>
                GO TO CHECKOUT
            </Button>
        </CartDropdownContainer>
)};

export default CartDropdown;