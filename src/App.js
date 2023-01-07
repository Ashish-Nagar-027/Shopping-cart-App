import './App.css';
import { useContext } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import  Cart from './Components/Cart';
import { Route, Routes } from "react-router-dom"
import { CartData } from './Context';


function App() {

  const { isDarkMode } =  useContext(CartData)

  return (
    <div className={isDarkMode ? "App dark-app" : "App"}>
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}  />
      </Routes>
    </div>
  );
}

export default App;
