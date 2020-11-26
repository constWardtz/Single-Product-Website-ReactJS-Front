import styled from 'styled-components'

export const StyledNavbar = styled.div `
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 80px;
    box-shadow: var(--dark-color) 0px 0px 5px 0px;

    /* Layout */
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    /* Media Query */
    @media screen and (max-width: 996px){
        
    }

`

export const StyledLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    h3{
        color: var(--primary-color);
        font-size: calc(var(--secondary-text-size) + 1vmin);
    }
`

export const StyledMenu = styled.ul`
    /* Layout */
    display: flex;
    justify-content: center;
    align-items: center;

    li{
        padding: 20px;
        cursor: pointer;
        font-weight: var(--font-weight-500);

        &:hover{
            color: var(--primary-color);
            transition: .5s;
        }
    }

     /* Media Query */
    @media screen and (max-width: 996px){
        position: relative;
        top: 10rem;
        flex-direction: column;
    }
`