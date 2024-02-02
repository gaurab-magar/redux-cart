import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
  const cartList = useSelector(state => state.cartState.cartList);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light shadow-lg" style={{ backgroundColor: '#e3f2fd'}}>
        <div className="container">
          <NavLink className="navbar-brand fw-semibold" to="/">
            Redux-shop
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto fw-semibold">
              <NavLink className="nav-link" to="/">
                HOME
              </NavLink>
              <NavLink className="nav-link" to="/products">
                PRODUCTS
              </NavLink>
              <NavLink className="nav-link" to="/shooping">
                SHHOPING
              </NavLink>
            </div>
              <NavLink className="nav-link" to="#">
                <span className='fw-bold'>Cart:{cartList.length} </span>
              </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
