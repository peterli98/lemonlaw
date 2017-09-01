import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/index.jsx';
import SignIn from './components/signin/index.jsx';
import About from './components/about/index.jsx';
import Contacts from './components/contacts/index.jsx';
import Chatroom from './components/chatroom/index.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const app = document.getElementById('root');

ReactDOM.render(
  <Router>
    <div>
        <Route exact path="/" component={Home}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/chatroom" component={Chatroom}/>
    </div>
  </Router>,
  app
);
