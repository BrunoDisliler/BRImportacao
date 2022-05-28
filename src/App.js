import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/products" element={ <Product/> } />
        <Route path="/products/:id" element={ <ProductDetail/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/checkout" element={ <Checkout/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
    </>
  );
}

export default App;
