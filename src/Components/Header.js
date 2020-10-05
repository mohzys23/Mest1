import React from 'react';
import './Header.css';
import download from '../download.png';

function Header () {
    return (
      <nav>
          <div>
<img src={download} alt="code icon" class="top-img"/>
          </div>
          <div>
               <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About-us</a></li>
              <li><a href="#">Privacy Policy</a></li>
          </ul>
          </div>
         
      </nav>
    );
}

export default Header;