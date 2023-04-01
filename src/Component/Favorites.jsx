import React from 'react'
import '../App.css'
import { useAppcontext } from './contextAPI/Appcontext'

const Favorites = () => {
  const {favorites, Addtofavorites, removefrom_fav }=useAppcontext();
  const favoritescheker=(id)=>{
    const boolean = favorites.some((book)=>book.id === id)
    return boolean
  }
  return (
    <div className='book-list'>
    {favorites.length>0 ? favorites.map((book)=>{
        return (
        <div key={book.id} className='book'>
            <div > <h2>{book.title}</h2></div>
            <div> <img src={book.image_url} alt="" /></div>
            <div>
                
            {favoritescheker(book.id)?(<button onClick={()=>removefrom_fav(book.id)}>remove from  Favorites</button>):(<button onClick={()=>Addtofavorites(book)}>Add to Favorites</button>)}
            </div>        
        </div>
        )
    }):<h1>you din have any favorites</h1> }
</div>  )
}

export default Favorites