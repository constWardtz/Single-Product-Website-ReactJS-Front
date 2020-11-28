import React from 'react'
import { StyledHeader } from '../../styles/Header'

/* Components */
import HeaderBottom from './HeaderBottom'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'
import HeaderBanner from './HeaderBanner'
import HeaderService from './HeaderService'



const Header = () => {
    return (
        <StyledHeader>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
            <HeaderBanner />
            <HeaderService />
        </StyledHeader>
    )
}

export default Header

// https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-index-1.html#

// https://material-ui.com/components/autocomplete/

// https://material-ui.com/getting-started/templates/

// Cellphone Pouch | Swimwear - TOP - TERNO

// https://mdbootstrap.com/docs/react/navigation/navbar/