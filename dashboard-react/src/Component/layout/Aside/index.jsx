import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Aside = () => {
  return (
  <>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    
    <a href="index3.html" className="brand-link">

        <img
          src="/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>


    
    <div className="sidebar">
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="#" className="d-block">Alexander Pierce</a>
        </div>
      </div>

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* start dashboard */}
            <li className="nav-item has-treeview menu-open">
              <a href="#" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                </p>
              </a>
            </li>
            {/* end dashboard */}
            {/* start About */}
            <li className="nav-item has-treeview">
            {/* /about */}
           {/* <Link className="text-link" to={"/productdetails/"+NewList.id} > */}
  
              <a className="nav-link">
                <i className="nav-icon bi bi-person"></i>
                <p>
                  About
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link  to={"/about"}  className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>View</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link  to={"/about/create"}  className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>crud</p>
                  </Link>
                </li>
              </ul>
            </li>
            {/* end About */}
            
            {/* start resume */}
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-file-earmark-text"></i>
                <p>
                  Resume
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link  to={"/resume"}  className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>View</p>
                  </Link>                
                </li>
                <li className="nav-item">
                  <Link  to={"/resume/create"}  className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Crud</p>
                  </Link>     
                </li>
              </ul>
            </li>
            {/* end resume */}
            
            {/* start portfolio */}
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-images"></i>
                <p>
                  Portfolio
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <Link  to={"/portfolio"}  className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>View</p>
                </Link>     
                <Link  to={"/create"}  className="nav-link">
                  <i className="far fa-circle nav-icon"></i>
                  <p>Crud</p>
                </Link>     
              </ul>
            </li>
            {/* end portfolio */}          
            
            
            {/* start services */}
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-hdd-stack"></i>
                <p>
                  Services
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link  to={"/services"}  className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>View</p>
                  </Link>     
                </li>
                <li className="nav-item">
                  <Link  to={"/services/create"}  className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Crud</p>
                  </Link>  
                </li>
              </ul>
            </li>
            {/* end services */}      
            <li className="nav-header upper-case">info Contact</li>
            {/* start Contact */}
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon bi bi-envelope"></i>
                <p>
                  Contact
                </p>
              </a>
            </li>
            {/* end Contact */} 
            
    
  
            <li className="nav-header upper-case">info user and admin</li>
            {/* start users */} 
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-user-circle"></i>
                <p>
                  Users
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>View</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Crud</p>
                  </a>
                </li>
              </ul>
            </li>
            {/* end users */} 
            {/* start admin */} 
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fa fa-users" aria-hidden="true"></i>
                <p>
                  Admins
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>View</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Crud</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Role</p>
                  </a>
                </li>
              </ul>
            </li>
            {/* end admin */} 
            <li className="nav-header upper-case">info setting</li>
            {/* start setting */} 
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa fa-cogs"></i>
                <p>
                  Setting
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/examples/login.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Social media</p>
                  </a>
                </li>
              </ul>
            </li>
            {/* end setting */} 
          </ul>
        </nav>
        
    </div>
  </aside>
  </>
  );
};

export default Aside;