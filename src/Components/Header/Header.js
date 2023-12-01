// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoHomeOutline } from "react-icons/io5";
import { PiNotebookLight } from "react-icons/pi";
import { TbAward } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
function NavScrollExample() {
  const favorites = useSelector((state) => state.favorites);
  const counter = useSelector((state) => state.counter);
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <Navbar expand="lg" className=" p-fixed">
      <Container container>
        <Navbar.Brand className="nav-brand">
          <NavLink className={"nav-link"} to={"./"}>
            <span className="brand-k">
              <strong>K</strong>oto
            </span>
            <span className="brand-b">
              <strong>B</strong>ooks
            </span>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className={"nav-link nav-icon"} to={"./"}>
              {" "}
              <div className="icon-col">
                <IoHomeOutline className="h-icon" />
                Home
              </div>
            </NavLink>{" "}
            <NavLink className={"nav-link nav-icon"} to={"/books"}>
              {" "}
              <div className="icon-col">
                <PiNotebookLight className="h-icon" />
                Books
              </div>
            </NavLink>
            <NavLink className={"nav-link nav-icon"} to={"/favorite-books"}>
              <div className="icon-col">
                <TbAward className="h-icon" />
                {`Favorite (${counter})`}
              </div>
            </NavLink>
            <NavLink className={"nav-link nav-icon"} to={"/author"}>
              <div className="icon-col">
                <HiOutlineUserGroup className="h-icon" />
                Authors
              </div>
            </NavLink>
            <NavLink className={"nav-link nav-icon"} to={"/login"}>
              <div className="icon-col">
                <AiOutlineLogin className="h-icon" />
                Login
              </div>
            </NavLink>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => handleChange(e)}
            />
            <Link
              className="btn btn-outline-danger"
              to={`/search/${searchValue}`}
            >
              Search
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
