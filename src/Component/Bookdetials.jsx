import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const Bookdetials = () => {
  const parms =useParams()
  const [bookdet,setBookdet]=useState([]);
axios.get(`https://example-data.draftbit.com/books/${parms.id}`).then((res)=>{setBookdet(res.data)}).catch((err)=>console.log(err))


  return (
    <div className='book-list'>
            <div key={bookdet.id} className='book'>
                <div > <h2 >{bookdet.title}</h2></div>
                <div><h2>{bookdet.authors}</h2></div>
                <p>{bookdet.description}</p>
                <div> <img src={bookdet.image_url} alt=""/></div>
                <div>
                    
                </div>        
            </div>
    
    </div>
  )
}
export default Bookdetials