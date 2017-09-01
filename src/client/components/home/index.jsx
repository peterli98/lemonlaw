import React from 'react';
import styles from './style.css';
import { Link } from "react-router-dom";

class Home extends React.Component {

   render() {
      return (
         <div>

         <div className="logo">
         <img src="TheLemonLaw.png"/>
         </div>

         <div className="start-button-container">
           <div className="start-button">
             <Link to="/signin">
                <button id="start-button-style">Start Chatting</button>
             </Link>
           </div>
         </div>

         <div className="footer">
          <ul className="bottom-banner">
          <Link to="/about">
              <li><button id="about">About</button></li>
          </Link>
          <Link to="/contacts">
              <li><button id="contact">Contact</button></li>
          </Link>
          </ul>
        </div>

        </div>
      );
   }
}

export default Home;
