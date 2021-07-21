import { Link } from "react-router-dom";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import logo from "../../images/mylogo1.png";
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to='./'>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: 40,
            }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <ul className="navbar-nav  mb-2 mb-lg-0 text-end">
            <li className="nav-item">
              <Link
                className="nav-link active navText"
                aria-current="page"
                to="./"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navText" to="./skills">
                SKILLS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navText" to="./works">
                WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navText" to="./contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
