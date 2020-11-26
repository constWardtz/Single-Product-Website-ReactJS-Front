import React from 'react'
import { StyledHeader } from '../../assets/styles/Header'

import HeaderMiddle from './header-middle'
import HeaderTop from './header-top'


const Header = () => {
    return (
        <StyledHeader>
            <HeaderTop />
            <HeaderMiddle/>
        </StyledHeader>
    )
}

export default Header

// https://bootstrap-ecommerce.com/bootstrap-ecommerce-html/page-index-1.html#

// https://material-ui.com/components/autocomplete/
