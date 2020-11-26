import React from 'react'

/* Components */
import { StyledLogo, StyledMenu, StyledNavbar } from '../../assets/styles/navbar/Navbar'

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledLogo>
                <h3>JPG</h3>
            </StyledLogo>
            <StyledMenu>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
                <li>About</li>
            </StyledMenu>
        </StyledNavbar>
    )
}

export default Navbar