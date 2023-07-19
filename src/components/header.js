import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo1 from "../assests/images/header/travelo_logo.png";

function Header() {
  return (
    <>
      <div className="container-fluid">
        <header className="header">
          <a href="#" className="logo">
            <img src={Logo1} className="header_logo_image" />
            Travelo
          </a>
          <input className="side-menu" type="checkbox" id="side-menu" />
          <label className="hamb" for="side-menu">
            <span className="hamb-line"></span>
          </label>
          <nav className="nav">
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Places</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#" className="header_btn_anchor">
                  <Button variant="btn header_btn ">Connect</Button>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
