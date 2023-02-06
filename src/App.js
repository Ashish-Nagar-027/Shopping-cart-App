import './App.css';
import { useContext } from 'react';
import Header from './Components/Header';
import ProdutsHome from './pages/ProductsHome'
import Cart from './Components/Cart Products components/Cart';
import { Route, Routes } from "react-router-dom"
import { CartData } from './Context';
import Footer from './Components/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';


function App() {

  const { isDarkMode } =  useContext(CartData)

  return (
    <div className={isDarkMode ? "App dark-app" : "App"}>
      <Header  />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProdutsHome />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
