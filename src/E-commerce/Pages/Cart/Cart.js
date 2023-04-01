import { React, useContext, useState } from 'react'
import { CartContext } from '../../Context_Api/Context';
import "./Cart.css";
const Cart = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const globalstat = useContext(CartContext);
    const data1 = globalstat.state
    const dispatch = globalstat.dispatch
    const total = data1.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            firstName: firstName,
            lastName: lastName,
            cart: data1
        };

        fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="cart">
            {data1.length > 0 && <div className='total'>{total}</div>}
            <buuton onClick={() => dispatch({ type: 'deletall' })}>delete all</buuton>
            {
                data1.map((item) => {
                    return (
                        <div className='card'>
                            <img src={item.image} />
                            <p>{item.title}</p>
                            <p>{item.quantity * item.price}</p>
                            <div className='quantity'>
                                <button onClick={() => dispatch({ type: 'increase', payload: item })}>+</button>
                                <p>{item.quantity}</p>
                                {item.quantity > 1 ? (<button onClick={() => dispatch({ type: 'dencrease', payload: item })}>-</button>) : null}
                            </div>
                            <h2 onClick={() => dispatch({ type: 'remove', payload: item })}>x</h2>
                        </div>

                    )

                })
            }
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <button type="submit">Submit Order</button>
            </form>
        </div>


    )
}

export default Cart