import React from 'react';
import styles from './style.css';
import { Link } from "react-router-dom";

class About extends React.Component {

   render() {
      return (
         <div>

         <div className="home">
           <h2><a href="main_page.html"><i className="fa fa-home" ></i></a></h2>
         </div>

         <div className="title">
           <h1>The Team</h1>
         </div>

       <div className="body">
         <div className="p">
           <p>We are a group of 3 students from the ECE department at the University of Waterloo. </p>
         </div>

         <div className="logo">
         		<img src="TheLemonLaw.png"/>
       	</div>
       </div>

        </div>
      );
   }
}

export default About;
