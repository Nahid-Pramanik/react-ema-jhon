import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Order.css'
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FaMoneyCheck } from "react-icons/fa";


const Order = () => {

    const savedCart = useLoaderData();
    
    const [cart, setCart] = useState(savedCart);

    const HandleRemoveFromCart = (id) => {
        const remainCart = cart.filter(product => product.id !== id);
        setCart(remainCart);
        removeFromDb(id);

    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    
    return (
        <div className='shop-container'>
            <div className='order-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        HandleRemoveFromCart={HandleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div>
                <Cart 
                cart={cart}
                handleClearCart={handleClearCart}
                >
                    <Link className='link-text' to='/proceed'>
                        <button className="proceed-btn">
                            <span >Proceed Checkout</span>
                            <FaMoneyCheck />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;