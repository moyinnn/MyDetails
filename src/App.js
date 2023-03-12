//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import ProfilePicture from './Component/Profile/ProfilePhoto';
import ProfileName from './Component/Profile/FullName';
import ProfileAddress from './Component/Profile/Address';

class App extends Component {
  render(){
    return(
      <div className="App">
        <ProfilePicture />

        <div className='part1'>
          <ProfileName />
          <ProfileAddress />
        </div>

      </div>
    );
  }
}


export default App;
