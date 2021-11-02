import React from 'react';
import { CartIconContainer, ShopIcon, ItemCount } from './cart-icon.styled';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { useSelector } from 'react-redux';

const CartIcon = ({ toggleCartHidden }) => {
    const itemCount = useSelector(selectCartItemsCount);

    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShopIcon />
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
)};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null,mapDispatchToProps)(CartIcon);