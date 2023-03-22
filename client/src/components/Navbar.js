import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary text-light shadow p-3 mb-5">
                <div className="container-fluid">
                    <NavLink className="navbar-brand nav-link" href="/">SALES APP</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">ADD SALES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/TopSales">TOP 5 SALES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/TotalRevenue">TODAY'S TOTAL REVENUE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Login">LOGIN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Register">REGISTER</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Logout">LOGOUT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;
