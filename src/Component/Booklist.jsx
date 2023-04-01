import React from 'react'
import '../App.css'
import { Api_url } from '../Api'
import {useEffect, useState } from 'react'
import axios from 'axios'
import { useAppcontext } from './contextAPI/Appcontext'
import { useNavigate, usenavigate } from 'react-router-dom'
const Booklist = () => {
    const [query, setQuery] = useState('');
 ;
    const navigate= useNavigate()
    const [book,setBook]=useState([]);
  
  const {favorites, Addtofavorites, removefrom_fav }=useAppcontext();
  console.log('fav',favorites)
  const favoritescheker=(id)=>{
    const boolean = favorites.some((book)=>book.id === id)
    return boolean
  }
    useEffect(()=>{
axios.get(Api_url).then(res =>{
    setBook(res.data) 
}).catch(err => console.log(err))
    },[])
    const handleInputChange = event => {
        const { value } = event.target;
        setQuery(value);
        const filteredData = book.filter(item =>
          item.title.toLowerCase().includes(value.toLowerCase())
        );
        setBook(filteredData);
      }
  return (<>
    <input type="text" value={query} onChange={handleInputChange} />
    <div className='book-list'>
        {book.map((book)=>{
            return (
            <div key={book.id} className='book'>
                <div > <h2 >{book.title}</h2></div>
                <div> <img src={book.image_url} alt=""  onClick={()=>navigate(`/Book/${book.id}`)}/></div>
                <div>
                {favoritescheker(book.id)?(<button onClick={()=>removefrom_fav(book.id)}>remove from  Favorites</button>):(<button onClick={()=>Addtofavorites(book)}>Add to Favorites</button>)}
                </div>        
            </div>
            )
        })}
    </div>
    </>
  )
}
export default Booklist