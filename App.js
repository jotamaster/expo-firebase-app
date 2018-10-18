import React from 'react';
import PreLoarder from './application/components/PreLoader';
import GuestNavigation from './application/navigations/guest';
import firebaseConfig from './application/utils/firebase'
import * as firebase from 'firebase'
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(){
    super()
    this.state=({
      isLogged: false,
      loaded: false
    })
  }

  async componentDidMount(){
    await firebase.auth().onAuthStateChanged((user) =>{
      if(user !== null){
        this.setState=({
          isLogged:true,
          loaded:true
        })
      }
      else{
        this.setState=({
          isLogged:true,
          loaded:false
        })
      }
    })
  }

  render() {
    return (
      
      <GuestNavigation/> 
      
    );
  }
}


