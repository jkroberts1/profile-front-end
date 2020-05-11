import React, { PropTypes } from 'react';
import './Profile.css';
import axios from "axios";
import Header from '../Header.js';
import Footer from '../Footer.js';
import MetaTags from 'react-meta-tags';
import { matchPath } from 'react-router';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = 
    {
      apiResponse: "",
    };
  }

  componentDidMount = (props) =>
  {
    const userName = this.props.match.params.userName;
    const url = '/profile/' + userName;
    console.log(process.env.REACT_APP_BACK_END_URL + url );
    fetch(process.env.REACT_APP_BACK_END_URL + url )
    .then(response => response.json())
    .then(data => this.setState({apiResponse : data}))
    .catch(err => {
      this.setState({apiResponse : ""})
    });
  }

  
  render() {

    const currentRoute= process.env.REACT_APP_FRONT_END_URL + this.props.location.pathname;
    if(typeof this.state.apiResponse.fullName !== 'undefined'){
      return (
        <div className="Profile">
          <MetaTags>
            <meta property="og:title" content={this.state.apiResponse.fullName} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentRoute} />
            <meta property="og:image" content={process.env.REACT_APP_BACK_END_URL + "/images/" + this.state.apiResponse.profileImaagePath } />
          </MetaTags>
          <body>
            <img id="profilePhoto" src ={process.env.REACT_APP_BACK_END_URL + "/images/" + this.state.apiResponse.profileImaagePath } />
            <div class="details">
              <h1>{this.state.apiResponse.fullName}</h1>
              <h2>Biography</h2>
              <p>{this.state.apiResponse.bio}</p>
            </div>
          </body>
        </div>
      );
    }else{
      return(
        <p></p>
      )
    }
  }
}
export default Profile;
