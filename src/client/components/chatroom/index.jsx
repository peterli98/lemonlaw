import React from 'react';
import styles from './style.css';
import { Link } from "react-router-dom";

class Chatroom extends React.Component {

   sendMessage(){
     
   }

   render() {
      return (
         <div>

           <input type="text" id="message"/>
           <div id="send">
           <button id="buttonSend" type="button" name="button" onclick="sendMessage()">Send</button>
           </div>

          <div id="disconnect">
          <button id="buttonDisconnect" type="button" name="disconnect" onclick="disconnect({name:name , age:age, gender:gender,room:room})">Disconnect</button>
          </div>

          <div id="message-container">
          </div>

          <div class="logo"><a href="about.html"><img src="TheLemonLaw.png"/></a>
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

export default Chatroom;
