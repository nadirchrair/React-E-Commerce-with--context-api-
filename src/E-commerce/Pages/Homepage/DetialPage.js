import { React, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from '../../Context_Api/Context'
const DetialPage = () => {
    const params = useParams()
    const [produit, setProduit] = useState([]);
    axios.get(` https://fakestoreapi.com/products/${params.id}`).then((res) => { setProduit(res.data) }).catch((err) => console.log(err))
    const GlobalStat = useContext(CartContext);
    const data = GlobalStat.state
    const dispatch = GlobalStat.dispatch;
    const get = GlobalStat.getQuantity

    return (
        <div className='book-list pt-5' >
            <div key={produit.id} className='book'>
                {produit.quantity = 1}
                <h2>{produit.title} </h2>
                <h2>{produit.price}</h2>
                <p>{produit.description}</p>
                {get(produit.id) >= 1 ? (<button onClick={() => dispatch({ type: 'increase', payload: produit })}>+</button>) : null}
                <p>{get(produit.id)}</p>
                {get(produit.id) > 0 ? (<button onClick={() => dispatch({ type: 'dencrease', payload: produit })}>-</button>) : null}

                <buuton className='btn btn-primary' onClick={() => { dispatch({ type: 'ADD', payload: produit }) }}>add To cart</buuton>
                <div> <img src={produit.image} alt="" /></div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default DetialPage