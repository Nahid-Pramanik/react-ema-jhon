import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Order.css'
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";


const Order = () => {

    const savedCart = useLoaderData();
    
    const [cart, setCart] = useState(savedCart);

    const HandleRemoveFromCart = (id) => {
        const remainCart = cart.filter(product => product.id !== id);
        setCart(remainCart);
        removeFromDb(id);

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;