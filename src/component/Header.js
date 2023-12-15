import React,{useState} from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon} from "mdb-react-ui-kit"
import {NavLink} from "react-router-dom";


function Header() {
    const [showBasics, setShowBasic]= useState(false);
  return (
   <>
    <MDBNavbar expand="lg" light bgColor='primary'>
        <MDBContainer fluid>
            <MDBNavbarBrand className='text-white'>
                <span style={{marginRigt:"10px"}}>
                    <MDBIcon fas icon="book-open"/>
                </span>
                Contact
            </MDBNavbarBrand>
            <MDBNavbarToggler
                aria-controls='navbar'
                aria-expanded='false'
                aria-label='Toggle navigation'
                className="text-white"
                onClick={()=>setShowBasic(!showBasics)}
                >
                    <MDBIcon fas icon='bars'/>
            </MDBNavbarToggler>
            <MDBCollapse navbar show={showBasics}>
                <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                  <MDBNavbarItem>
                  <MDBNavbarLink className='nav-link'>
                        <NavLink to="/" className="text-white">
                            Home
                        </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                  <MDBNavbarLink className='nav-link'>
                        <NavLink to="/addUser" className="text-white">
                            Add User
                        </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                  <MDBNavbarLink className='nav-link'>
                        <NavLink to="/about" className="text-white">
                            About
                        </NavLink>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBContainer>
    </MDBNavbar>
   </>
  )
}

export default Header