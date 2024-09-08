import React from 'react';

const Footer = () => {
  return (
  <>
    <footer id="footer" className="footer position-relative">
      <div className="container">
        <div className="copyright text-center ">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">iPortfolio</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="credits">
          <a href="https://bootstrapmade.com/">Designed by BootstrapMade</a>
        </div>
      </div>
    </footer>
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  </>
  );
};

export default Footer;