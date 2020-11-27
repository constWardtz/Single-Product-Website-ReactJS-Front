import React from 'react'

/* Styled */ 
import { StyledHeaderBottom, NavBtn } from '../../assets/styles/Header'
/* Components */ 

const HeaderBottom = () => {

    return (
        <StyledHeaderBottom>
            <NavBtn>
                <li>Fashion</li>
                <li>Bags</li>
                <li>Clothings</li>
                <li><i className="fa fa-bars"></i>
                    <strong>&nbsp;&nbsp;All category</strong>
                </li>
            </NavBtn>
            <div></div>
            <div></div>
        </StyledHeaderBottom>
    )
}

export default HeaderBottom