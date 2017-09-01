import React from 'react';
import styles from './style.css';
import { Link } from "react-router-dom";

class SignIn extends React.Component {

   render() {
      return (
         <div>

         <div className="home">
            <h2><a href="main_page.html"><i className="fa fa-home" ></i></a></h2>
         </div>

          <div className="logo">
  		      <a href="about.html"><img src="TheLemonLaw.png"/></a>
	        </div>


		       <div className="username">
            <label for="name">Username</label>
		        <input  className="usernameInput" id="name" type="text" name="name" value="" minlength="5" maxlength="14" placeholder="5 to 14 Characters" onfocus="this.placeholder=''" onblur="this.placeholder ='5 to 14 Characters'" />
           </div>

		       <div className="age">
            <label for="age">Age</label>
            <input className="ageInput" id="age" type="text" name="age" value="" maxlength="3" placeholder="Age" onfocus="this.placeholder=''" onblur="this.placeholder ='Age'" />
           </div>

    <div className="gender">
    <label for="gender">Gender</label>
    <input  className="usernameInput" id="gender" type="text" name="gender" value="" minlengh="4" maxlength="6" placeholder="Male or Female" onfocus="this.placeholder=''" onblur="this.placeholder ='Male or Female'" />
    </div>

    <Link to="/chatroom">
    <div className="login">
        <button  className="myButton" id="tv" type="button" name="button" onclick="setUser()">Log In</button>
		</div>
    </Link>

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

export default SignIn;
