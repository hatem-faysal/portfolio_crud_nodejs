import React, { Component, Fragment } from 'react'
import Navbar from '../../Component/layout/Navbar';
import Aside from '../../Component/layout/Aside';
import AppRoute from '../../route/AppRoute';
import Footer from '../../Component/layout/Footer';
import Breadcrumb from '../../Component/layout/Breadcrumb';

 class CreateAbout extends Component {


     render() {
          return (
          <>
              <Navbar/>
              <Aside/>
               <div className="content-wrapper">
                <Breadcrumb/>
                CreateAbout 
              </div>
              <Footer/>
          </>
          )
     }
}

export default CreateAbout;
