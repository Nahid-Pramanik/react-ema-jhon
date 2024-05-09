import './Cart.css';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({ cart, handleClearCart, children }) => {
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {

        if(product.quantity === 0){
            product.quantity = 1;
        }

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const total = totalPrice + totalShipping + tax;

    return (
        <div className='cart-container'>
            <h2>Order summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${total.toFixed(2)}</h6>

            <button onClick={handleClearCart} className='clear-cart-btn'>
                <span className='clear-cart-text'>Clear Cart</span>
                <RiDeleteBin6Line  />
            </button>
            {children}
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleClearCart: PropTypes.func,
    children: PropTypes.object
}

export default Cart;