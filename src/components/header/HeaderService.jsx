import React from 'react'

/* Style */ 
import {StyledHeaderService} from '../../assets/styles/Header/'

const HeaderService = () => {
    return (
        <StyledHeaderService>
            <div>
                <i className="fa fa-truck"></i>
                <h1>Fast Delivery</h1>
                <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div>
                <i className="fa fa-money"></i>
                <h1>Reasonable prices</h1>
                <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <h1>Customer support 24/7</h1>
                <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
        </StyledHeaderService>
    )
}

export default HeaderService