import React, { useState } from "react";
import {
MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

const NavbarPage = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
      <MDBNavbar light expand="lg">
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse isOpen={isOpen} navbar>
          <MDBNavbarNav left>
             <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <strong className="mr-2">Category</strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu navbar>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem active>
              <MDBNavLink to="#!">Fashion</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Bags</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Clothings</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }

export default NavbarPage;