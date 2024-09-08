import React, { Component, Fragment } from 'react'
import Navbar from '../../Component/layout/Navbar';
import Aside from '../../Component/layout/Aside';
import Footer from '../../Component/layout/Footer';
import Breadcrumb from '../../Component/layout/Breadcrumb';
import DataTableComponent from '../DataTableComponent';

 class IndexAbout extends Component {


     render() {
          return (
          <>
              <Navbar/>
              <Aside/>
               <div className="content-wrapper">
                <Breadcrumb/>
                        <DataTableComponent />
              </div>
              <Footer/>
          </>
          )
     }
}

export default IndexAbout;
