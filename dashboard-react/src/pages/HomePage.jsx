import React, { Component, Fragment } from 'react'
import Navbar from '../Component/layout/Navbar';
import Aside from '../Component/layout/Aside';
import Content from '../Component/layout/Content';
import Breadcrumb from '../Component/layout/Breadcrumb';
import Footer from '../Component/layout/Footer';
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
                <Content/>
              </div>
              <Footer/>
          </>
          )
     }
}

export default ResumePage
