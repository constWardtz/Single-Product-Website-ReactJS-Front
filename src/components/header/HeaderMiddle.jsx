import React from 'react'
import { StyledHeaderMiddle, StyledInput, StyledIcons, StyledUserNav }  from '../../styles/Header'
import { StyledLogo } from '../../styles/navbar/Navbar'
import { MDBBadge } from 'mdbreact' 

const HeaderMiddle = () => {
    return (
        <StyledHeaderMiddle>
            <StyledLogo>
                <h3>JGP</h3>
            </StyledLogo>
            <StyledInput>
                <input type="text" placeholder="Search.."/>
                <i className="fa fa-search"></i>
            </StyledInput>
            <StyledIcons>
                <li>
                    <i className="fa fa-shopping-cart"></i>
                    <MDBBadge color="purple" className="h-50 p-2 rounded-pill">11</MDBBadge>
                    <i className="fa fa-user"></i>
                </li>
                <StyledUserNav>
                    <ul>
                        <li>Sign&nbsp;in</li>
                        <li>|</li>
                        <li>Register</li>
                    </ul>
                </StyledUserNav>
            </StyledIcons>
        </StyledHeaderMiddle>       
    )
}

export default HeaderMiddle

// https://mdbootstrap.com/docs/react/navigation/hamburger-menu/