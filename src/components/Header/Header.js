import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import Logo from '../../images/logo2.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useAuth from '../../hooks/useAuth';
const Header = (props) => {
    const {user,logOut} = useAuth();
    return (
        <nav className="navbar navbar-expand navbar-light bg-white py-2 fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="Hot Onion Logo"/>
                </Link>
               
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                        <Link to="/checkout" className="nav-link">
                            {/* <FontAwesomeIcon className="cart-icon" icon={faCartArrowDown} /><span className="badge bg-light">{props.cart.length}</span> */}
                            <AiOutlineShoppingCart className="cart-icon fs-5"/><span className="badge bg-light">0</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        {
                            user ?  
                             <Link to="/checkout" className="nav-link">{user.displayName}</Link> 
                             :
                             <Link to="/login" className="nav-link">Login</Link> 
                        }
                    </li>
                    <li className="nav-item">
                        {
                            user ? 
                            <Link to="/" className="nav-link">
                                <button onClick={() => {logOut()}} className="btn btn-danger rounded-pill">Sign Out</button>
                            </Link>
                            :
                            <Link to="/login" className="nav-link">
                                <button className="btn btn-danger btn-rounded">Sign Up</button>
                            </Link>
                        }
                       
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Header;