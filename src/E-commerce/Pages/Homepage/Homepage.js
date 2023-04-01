import React from 'react'

import { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { CartContext, Context } from '../../Context_Api/Context';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const Homepage = () => {
    const [product, setPeoduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [val, setVal] = useState('');
    const navigate = useNavigate()
    const fetchdata = async () => {
        await axios.get('https://fakestoreapi.com/products').then((res) => { setPeoduct(res.data) }).catch((err) => { console.log(err) })

    }
    const fetchCat = async () => {
        await axios.get('https://fakestoreapi.com/products/categories').then((res) => {
            setCategory(res.data)
        }).catch((err) => { console.log(err) })
    }
    const getelemnt = async (cat) => {
        await axios.get(`https://fakestoreapi.com/products/category/${cat}`).then((res) => { setPeoduct(res.data) }).catch((err) => { console.log(err) })
    }
    const handleInputChange = event => {
        const { value } = event.target;
        setVal(value);
        const filteredData = product.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setPeoduct(filteredData);
    }

    useEffect(() => {
        fetchdata()
        fetchCat()
    }, []);
    console.log(category);

    const GlobalStat = useContext(CartContext);
    const data = GlobalStat.state
    const dispatch = GlobalStat.dispatch;
    return (
        <>
            <div className="row">

                <div className='col-6 col-sm-3'>

                    <ButtonGroup aria-label="Basic example" className='buut'>

                        {category.map((category) => {

                            return (
                                <Button variant="secondary" onClick={() => { getelemnt(category) }}>{category}</Button>)
                        })}
                    </ButtonGroup>

                </div>

            </div>
            <input placeholder='entre ' value={val} onChange={handleInputChange} />

            <div className="home">
                {
                    product.map((item) => {
                        item.quantity = 1;
                        return (
                            <div className="card1" key={item.key}>
                                <Link to={`/product/${item.id}`}> <img src={item.image} alt="" /></Link>
                                <p>{item.title}</p>
                                <h3>${item.price}</h3>
                                <button onClick={() => { dispatch({ type: 'ADD', payload: item }) }}>
                                    add to cart
                                </button>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Homepage