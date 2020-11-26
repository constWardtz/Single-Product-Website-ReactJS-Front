import React from 'react'
import { StyledHeaderMiddle, StyledInput, StyledIcons, StyledUserNav }  from '../../assets/styles/Header'
import { StyledLogo } from '../../assets/styles/navbar/Navbar'

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
                    <i className="fa fa-user"></i>
                </li>
                <StyledUserNav>
                    <ul>
                        <li>Sign in</li><li>|</li><li>Register</li>
                    </ul>
                </StyledUserNav>
            </StyledIcons>
        </StyledHeaderMiddle>       
    )
}

export default HeaderMiddle