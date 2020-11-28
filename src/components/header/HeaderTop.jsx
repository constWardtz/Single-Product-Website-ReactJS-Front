import React from 'react'
import { StyledHeaderTop, StyledMenu } from '../../styles/Header'

const HeaderTop = () => {
    return (
        <StyledHeaderTop>
            <StyledMenu isDisplay={true}>
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
                <li>About</li>
            </StyledMenu>
            <StyledMenu>
                <li><i className="fa fa-phone"></i> +09123456789</li>
                <li><i className="fa fa-envelope"></i> CrochetEmail@email.com</li>
            </StyledMenu>
        </StyledHeaderTop>
    )
}

export default HeaderTop