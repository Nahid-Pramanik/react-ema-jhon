import './Product.css';
import { FaCartArrowDown } from "react-icons/fa";
import PropTypes from 'prop-types';

const Product = ({ product, handleAddToCart }) => {
    const { name, price, seller, ratings, img } = product;
    // const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-title'>{name}</h6>
                <p className='product-price'>Price: {price}</p>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-rating'>Rating: {ratings}</p>

            </div>
            <button onClick={() => handleAddToCart(product)} className='add-to-card-btn'>
                Add to Cart
                <FaCartArrowDown className='cart-icon'></FaCartArrowDown>
            </button>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func
}

export default Product;