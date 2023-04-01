import { Route, Routes } from 'react-router-dom';
import NavBar from './E-commerce/Navbbar';
import Cart from './E-commerce/Pages/Cart/Cart';
import Homepage from './E-commerce/Pages/Homepage/Homepage';
import DetialPage from './E-commerce/Pages/Homepage/DetialPage';
function App() {
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path='/' element={<Booklist />} />
        <Route path='/Book/:id' element={<Bookdetials />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer /> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='product/:id' element={<DetialPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>

  );
}
export default App;