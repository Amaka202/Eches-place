import React, { Component } from 'react'
import '../styles/cart.css'
import formatCurrency from '../utils';

export default class Cart extends Component {
    render() {
        let {cartItems} = this.props;
        return (
            <div>
                <div>
                {cartItems.length === 0 ? <div className='cart cart-header'>Cart is empty</div>
                : 
                <div className='cart cart-header'> You have {cartItems.length} in the cart</div>
                }
            </div>
            <div>
                <div className="cart">
                    <ul className="cart-items">
                        {cartItems.map(item => (
                            <li key={item._id}>
                                <div>
                                    <img src={item.image} alt='Product'/>
                                </div>
                                <div>
                                    {item.title}
                                    <p>{formatCurrency(item.price)} X {item.count}</p>
                                    <button onClick={() => this.props.removeFromCart(item._id)} className="btn-sec">X</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}
