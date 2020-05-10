import React from 'react';
import './App.css';
import Profile from './Profile/Profile.js';
import axios from "axios";
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
require('dotenv').config()

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = 
    {
      apiResponse: "",
    };
  }
  render() {
    return (
      <div className="App">
          <Header/>
          <BrowserRouter>
          <Switch>
            <Route path='/profile/:userName' component={Profile} />
            <Route path='/' component={Home} />
          </Switch>
          </BrowserRouter>
          <Footer/>
      </div>
    );
  }
}
export default App;
