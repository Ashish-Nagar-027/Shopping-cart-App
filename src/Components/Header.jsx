import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { CartData } from "../Context";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const { cartProducts, isDarkMode, setIsDarkMode } = useContext(CartData);

  const [hamClicked, setHamClicked] = useState(false);

  return (
    <div className="Navbar">
      <div className="left-nav">
        <Link to="/" className="logo">
          Your-Cart
        </Link>
      </div>

      <div className="right-nav">
        <div
          className={
            hamClicked ? "right-navbar-items show-nav" : "right-navbar-items"
          }
          onClick={() => setHamClicked(!hamClicked)}
        >
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/products" className="">
            products
          </Link>
          <Link to="/contact" className="">
            Contact
          </Link>
          {isAuthenticated ? (
            <button
              className="login-button"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button
              className="login-button"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          )}
        </div>

        <div className="cart-div">
          <Link to="/Cart" className="cart-icon">
            <button className="nav-btns">
              <AiOutlineShoppingCart />
            </button>
            <button className="cart-items-number nav-btns">
              {cartProducts.length}
            </button>
          </Link>
        </div>

        <div
          className="themeChangeIcon"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          <button className="nav-btns">
            {isDarkMode ? <BsMoon /> : <BsSun />}
          </button>
        </div>

        <div
          className={hamClicked ? "hamburger ham-clicked" : "hamburger"}
          onClick={() => setHamClicked(!hamClicked)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
