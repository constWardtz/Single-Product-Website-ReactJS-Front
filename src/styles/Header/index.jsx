import styled from 'styled-components'

/* ASSETS */ 
import Banner from '../../assets/images/Banner.jpg'

/* HEADERS CONTAINER */ 
export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
`

/* STYLED MENU TOP */ 
export const StyledMenu = styled.ul`
    display: flex;

    li{
        padding: 8px;

        &:hover{
            color: #fff;
            cursor: pointer;
        }
    }
    
     /* Medium Screen */
    @media screen and (max-width: 729px){
        display: ${({ isDisplay }) => isDisplay ? 'none' : 'flex'};
        flex-wrap: wrap;
    }
`

/* HEADER TOP */ 
export const StyledHeaderTop = styled.div`
    width: 100%;
    height: 40px;
    background: var(--primary-color);
    color: var(--light-color);
    font-size: var(--small-text-size);

    /* Layout */
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    /* Small Screen (2) */
    @media screen and (max-width: 330px){
        height: 70px;
        padding: 10px;

        ul{
            margin-bottom: -1rem;
            
            li{
                margin-top: -.5rem;
            }
        }
    }

    /* Medium Screen */
    @media screen and (max-width: 729px) {
        justify-content: flex-start;
    }
`

/* MIDDLE HEADER */ 
export const StyledHeaderMiddle = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 1px var(--light-color) solid;
    /* Layout */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Large Screen */
    @media screen and (max-width: 906px) and (min-width: 728px){
        margin: 0 5rem 0 1rem;
    }
    /* Medium Screen */
    @media screen and (max-width: 729px) and (min-width: 575px){
        width: 100vw;
    }
    /* Small Screen */
    @media screen and (max-width: 576px){
        all: unset;
        border-bottom: 1px var(--light-color) solid;
        h3{
            all: unset;
            font-size: 2rem;
            color: var(--primary-color);
            font-weight: var(--font-weight-500);
        }
        input{
            width: 100%;
        }
    }
`

/* HEADER BOTTOM / IMAGE */ 
export const StyledHeaderBottom = styled.div`
    width: 100%;
    height: 45px;
    border-bottom: 1px var(--light-color) solid;

    /* Layout */
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
`

/* HEADER BUTTOM BANNER */ 
export const StyledHeaderBanner = styled.img.attrs({
    src: Banner
})`
    width: 100%;
`


/* NAVIGATION BUTTONS */ 
export const NavBtn = styled.ul`
    /* Large Screen */
    @media screen and (max-width: 906px) and (min-width: 728px){
        display: none
    }
    li{
        float: right;
        padding: 10px;
        
        &:hover{
            color: var(--primary-color);
            cursor: pointer;
            transition: all .3s ease-in-out;
        }
    }
`

/* INPUT CONTAINER */ 
export const StyledInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: auto;
    padding: 12px;
    input{
        padding: 12px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border: 1px var(--light-color) solid;
        width: 30rem;
        font-size: var(--primary-font-size);
    }

    i{
        padding: 12px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background: var(--primary-color);
        width: 3rem;
        color: var(--light-color);
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            cursor: pointer;
            background: var(--hover-color);
            transition: all .3s ease-in-out;
        }
    }


      /* Large Screen */
    @media screen and (max-width: 906px) and (min-width: 728px){
        input{
            width: 20rem;
        }
    }
    /* Medium Screen */
      @media screen and (max-width: 729px) and (min-width: 575px){
        input{
            width: 12rem;
        }
    }
       /* Small Screen */
    @media screen and (max-width: 576px){
        input{
            flex-grow: 1;
            flex-basis: 90rem;
            width: 100%;
        }
    }
`

export const HamBurgerButton = styled.div`

`

/* USER ICON CONTAINER */ 
export const StyledIcons = styled.div`
    /* Layout */
    display: flex;
    justify-content: center;
    align-items: center;
  
    li{
        display: flex;
        justify-content: center;
          /* Small Screen */
        @media screen and (max-width: 576px){
            flex-wrap: wrap;
        }
        
        i{
            padding: 10px;
            font-size: calc(var(--primary-text-size) - 1rem);

             &:hover{
                cursor: pointer;
                color: var(--hover-color);
                transition: all .3s ease-in-out;
            }
        }
    }
`

/* USER ICON */ 
export const StyledUserNav = styled.div`
    display: flex;
    width: 10rem;
    margin-right: 1rem;
  
    
    ul{
        display: flex;
        li{
            margin-top: 1rem;
            padding: 5px;
            /* Small Screen */
            @media screen and (max-width: 576px){
                align-items: flex-end;
            }
            &:hover{
                cursor: pointer;
                color: var(--hover-color);
                transition: all .3s ease-in-out;
            }
        }
    }
`

/* HEADER SERVICE */ 
export const StyledHeaderService = styled.div`
    height: 175px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    div{
        height: 100%;
        width: 20%;
        margin: 1rem 2rem 1rem 2rem;
        i{
            font-size: calc(var(--primary-text-size) - .5rem);
            padding: 5px;
        }
        h1{
            font-size: calc(var(--secondary-text-size) + .2rem);
            font-weight: calc(var(--font-weight-500) + 200);
        }

        p{
            font-size: var(--small-text-size);
            color: var(--thin-color);
        }
    }
`