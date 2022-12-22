import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import  Cart from './Components/Cart';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
