import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/bmw-logo.svg'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
   return (
      <nav>
         <div className="container nav--container">
            <Link to="/" className='nav--logo'>
               <img src={logo} alt="Website Logo" />
            </Link>

            <ul className="nav--menu">
               <li><Link to="/profile">Billy Roy</Link></li>
               <li><Link to="/create">Create Post</Link></li>
               <li><Link to="/autthors">Authors</Link></li>
               <li><Link to="/logout">Logout</Link></li>
            </ul>

            <button className="nav__toggle-btn">
               <AiOutlineClose/>
            </button>
         </div>
      </nav>
   );
}

export default Header;
