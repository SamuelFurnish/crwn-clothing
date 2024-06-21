import { useContext } from 'react';

import { CartContext } from '../../contexts/cart';

import './checkout.scss';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);


    return (
        <div>
            <h1>I am the Checkout Page</h1>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const {id, name, quantity} = cartItem;
                        return (
                            <div key={id}>
                                <h2>{name}</h2>
                                <span>{quantity}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Checkout;