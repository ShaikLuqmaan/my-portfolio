//import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/App.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App-header">
      <Navbar color="secondary" light expand="md">
        <NavbarBrand href="/">My Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar color="secondary">
            <NavItem>
              <NavLink href="/" className="active">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/portfolio">Projects</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/education">Education</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Skills
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Java</DropdownItem>
                <DropdownItem>React</DropdownItem>
                <DropdownItem>Node.js</DropdownItem>
                <DropdownItem>JavaScript</DropdownItem>
                <DropdownItem>SQL</DropdownItem>
                <DropdownItem>MongoDB</DropdownItem>
                <DropdownItem>Express</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Shaik Luqmaan</NavbarText>
          <br></br>
        </Collapse>

        <div>
          <a
            href="https://www.linkedin.com/in/shaik-luqmaan-07221b189/"
            className="linked social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
          <a
            href="https://github.com/ShaikLuqmaan"
            className="git social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="google social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGoogle} size="1x" />
          </a>
        </div>
      </Navbar>
    </div>
  );
};
export default Header;
