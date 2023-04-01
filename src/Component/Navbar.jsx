import React from 'react'
import { Container } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>

    <Container>
    <div>
<Link to='/'> <h1> React Books App</h1></Link> 
</div>

<div > <Link to='/favorites'> <h3>  Your favorites </h3></Link>  </div>    

    </Container>
    </div>

  )
}

export default Navbar