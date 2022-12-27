import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import  Cart from './Components/Cart';
import { Route, Routes } from "react-router-dom"

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
