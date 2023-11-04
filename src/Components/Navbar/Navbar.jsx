import { Container, NavDropdown, Nav } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState("false");
  return (
    <div className="navbar animate__animated animate__fadeInDown">
      <Container>
        <div className="nav">
          <div className="logo">
            <Link to="/">
              <span>Tripo Games</span>
            </Link>
          </div>
          <div
            className="hammenu"
            style={{
              backgroundColor: openMenu ? "" : "#da392b",
              color: openMenu ? "" : "white",
            }}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
          >
            {openMenu ? <CgMenu /> : <AiOutlineClose />}
          </div>
          <div className="navmenu" style={{ display: openMenu ? "" : "flex" }}>
            <ul className="nav-list">
              <li>
                <Nav.Link>
                  <div className="nav-item">
                    <Link to="/">Home</Link>
                    {/* <a href="">Home</a> */}
                  </div>
                </Nav.Link>
              </li>
              <li>
                <NavDropdown title="Games" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link to="/games/kipon">Kipon</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/games/robotrix">Robotrix</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <Link to="/games/treasurebox">Treasure Box</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <Nav.Link>
                  <div className="nav-item">
                    <Link to="/career">Career</Link>
                    {/* <a href="">Career</a> */}
                  </div>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link>
                  <div className="nav-item">
                    <Link to="/about">About</Link>

                    {/* <a href="">About</a> */}
                  </div>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link to="/">
                  <div className="nav-item">
                    <Link to="/">Contact</Link>

                    {/* <a href="#contact">Contact</a> */}
                  </div>
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
