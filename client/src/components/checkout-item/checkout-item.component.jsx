import React from 'react';
import { CheckoutItemContainer, ImageContainer, Name, Quantity, Arrow, Value, Price, RemoveButton, Img } from './checkout-item.styles';

import { connect } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
return (
    <CheckoutItemContainer>
        <ImageContainer>
            <Img src={imageUrl} alt="item" />
        </ImageContainer>
        <Name>{name}</Name>
        <Quantity>
            <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
        </Quantity>
        <Price>{price}</Price>
        <RemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
        </RemoveButton>
    </CheckoutItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch (addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);