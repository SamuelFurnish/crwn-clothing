import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button';
import { CartContext } from '../../contexts/cart';

import './product-card.scss';



const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button type={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
    </div>
    );
};

export default ProductCard;