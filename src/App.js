import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
//import './Register_style.css';
//import Index from './anindex';
//import About from './About';
//import Users from './users';
//import FormPage from './Register';


function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/anindex">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/Register/">Register</Link>
            </li>
          </ul>
        </nav>
        <Route path="./anindex"  />
        <h1> We have authentication here.</h1>
        <AmplifySignOut />
         </div>
    </Router>
  );
}

export default AppRouter;
