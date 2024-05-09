import PropTypes from 'prop-types';
import './ReviewItem.css';
import { RiDeleteBin6Line } from "react-icons/ri";

const ReviewItem = ({ product, HandleRemoveFromCart }) => {
    const {id, img, name, price, quantity } = product;
    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='review-title'>{name}</p>
                <p className='review-price'>Price: <span className='orange-text'>${price}</span></p>
                <p className='review-price'>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={ () => HandleRemoveFromCart(id)} className='delete-btn'>
                <RiDeleteBin6Line  />
            </button>
        </div>
    );
};

ReviewItem.propTypes = {
    product: PropTypes.object.isRequired,
    HandleRemoveFromCart: PropTypes.func,
}

export default ReviewItem;