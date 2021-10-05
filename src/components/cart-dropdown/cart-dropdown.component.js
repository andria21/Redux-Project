import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { CartDropdownContainer, CartItemsContainer, EmptyMessage, Button } from './cart-dropdown.styles';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
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
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));