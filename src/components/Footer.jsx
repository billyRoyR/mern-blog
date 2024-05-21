import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <footer>
         <ul className="footer--categories">
            <li><Link to="posts/categories/:category">Agriculture</Link></li>
            <li><Link to="posts/categories/:category">Business</Link></li>
            <li><Link to="posts/categories/:category">Education</Link></li>
            <li><Link to="posts/categories/:category">Entertainment</Link></li>
            <li><Link to="posts/categories/:category">Art</Link></li>
            <li><Link to="posts/categories/:category">Investment</Link></li>
            <li><Link to="posts/categories/:category">Uncategorized</Link></li>
            <li><Link to="posts/categories/:category">Weather</Link></li>
         </ul>

         <div className="footer--copyright">
            <small>All Rights Reserved &copy; Copyright, ROME Tutorials.</small>
         </div>
      </footer>
   );
}

export default Footer;
