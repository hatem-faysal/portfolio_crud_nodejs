import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes, Link   } from 'react-router-dom';
import axios from 'axios' 
import AppURL from '../api/AppURL';
import IndexAbout from '../pages/About/IndexAbout'
import CreateAbout from '../pages/About/CreateAbout'
import ResumePage from '../pages/ResumePage'
import HomePage from '../pages/HomePage'

class AppRoute extends Component {

     constructor(){
          super();
          this.state={
               user:{}
          }
     }

     componentDidMount(){
          axios.get(AppURL.UserData).then((response) => { 
               this.setUser(response.data)
          }).catch(error=>{

          });
     }


     setUser = (user) => {
          this.setState({user:user})
     }

     render() {
          return (
        <Routes>
            <Route exact path="/about" element={<IndexAbout />} />
            <Route path="/about/create/" element={<CreateAbout />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
          )
     }
}

export default AppRoute
