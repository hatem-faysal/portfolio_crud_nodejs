import React, { Component, Fragment } from 'react'
import Navbar from '../Component/layout/Navbar';
import Aside from '../Component/layout/Aside';
import AppRoute from '../route/AppRoute';
import Footer from '../Component/layout/Footer';
import {BrowserRouter} from 'react-router-dom';
import Breadcrumb from '../Component/layout/Breadcrumb';
 class ResumePage extends Component {
     componentDidMount(){
          window.scroll(0,0)
     } 


     render() {
          return (
          <>
              <Navbar/>
              <Aside/>
               <div className="content-wrapper">
                     <Breadcrumb/>
                        ResumePage 
              </div>
              <Footer/>
          </>
          )
     }
}

export default ResumePage
