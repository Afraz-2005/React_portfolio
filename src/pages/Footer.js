import { Link } from "react-router-dom";
import logo from "../images/mylogo1.png";
import "./footer.css";

function Footer() {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          />
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <a className="footer-logo-link" href="#">
                <span className="hidden-link-text">LOGO</span>
                <h1>
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      width: 50,
                    }}
                  />
                </h1>
              </a>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">NAVIGATE</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <Link to="./">Home</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <Link to="./">Skills</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <Link to="./">Works</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-product">
                  <Link to="./">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">About this portfolio</h2> <hr />
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#"></a>
                </li>
                <h1 className="description">
                    This is my private portfolio, completely built using ReactJs.
                    I will keep updating it as soon as i catch up with some ideas and projects.
                </h1>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name"></h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    
                  </a>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <a target="_blank" rel="noopener noreferrer" href="#">
                    
                  </a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#"></a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#"></a>
                </li>
                <li className="menu-item menu-item-type-post_type_archive menu-item-object-customer">
                  <a href="#"></a>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">CONTACT ME</h2>
              <p className="footer-call-to-action-description">
                {" "}
                Any queries?
              </p>
              <a
                className="footer-call-to-action-button button"
                href="#"
                target="_self"
              >
                {" "}
                GET IN TOUCH{" "}
              </a>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">VIEW MY GITHUB</h2>
              <p className="footer-call-to-action-link-wrapper">
                {" "}
                <a
                className="footer-call-to-action-button button"
                href='https://github.com/Afraz-2007'
                target="_"
              >
                {" "}
                Github{" "}
              </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <a className="footer-copyright-link" href="#" target="_self">
                {" "}
                All rights reserved. | ©2021. | Designed By Imam Mahbir Afraz{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
