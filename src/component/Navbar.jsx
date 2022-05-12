import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { authContext, useAuth } from "../contexts/AuthContextProvider";


const Navbar = () => {
console.log(useContext(authContext));
    const {
      handleLogout,
      user: { email },
    } = useContext(authContext);

    const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin">
                  Admin
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                    <Box sx={{ flexGrow: 0 }}>
                      {email ? (
                        <Button
                          sx={{ color: 'black', fontWeight: 'bold' }}
                          onClick={handleLogout}
                        >
                          LOGOUT
                        </Button>
                      ) : (
                      <NavLink to="/auth" className="btn btn-outline-dark">
                      <i className="fa fa-sign-in me-2"></i> Login</NavLink>
                      )}
                    </Box>
                {/* <NavLink to="/register" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-user-plus me-1"></i> Register</NavLink> */}
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
