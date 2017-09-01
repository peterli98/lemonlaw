import React from 'react';
import styles from './style.css';
import { Link } from "react-router-dom";

class Contacts extends React.Component {

   render() {
      return (
         <div>

         <div className="home">
           <h2><a href="index.html"></a></h2>
         </div>

       <div className="section">

               <div className="matthew">
                 <div className="mh">
                 <h2>MC</h2>
                </div>
                 <ul>
                   <li>Email: m33chung@uwaterloo.ca</li>
                   <li>Cell: 437-777-2340</li>
                 </ul>
               </div>

               <div className="peter">
                 <div className="ph">
                 <h2>PL</h2>
               </div>
                 <ul>
                   <li>Email: z638li@uwaterloo.ca</li>
                   <li>Cell: 289-400-5224</li>
                 </ul>
               </div>

               <div className="alvin">
                 <div className="ah">
                 <h2>AW</h2>
                 </div>
                 <ul>
                   <li>Email: tfwong@uwaterloo.ca</li>
                   <li>Cell: 647-988-8346</li>
                 </ul>
               </div>

       </div>


        </div>
      );
   }
}

export default Contacts;
