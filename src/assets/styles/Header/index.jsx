import styled from 'styled-components'

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
`

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

export const StyledHeaderTop = styled.div`
    width: 100%;
    height: 40px;
    background: var(--primary-color);
    color: var(--light-color);
    font-size: var(--small-text-size);

    /* Layout */
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    /* Small Screen (2) */
    @media screen and (max-width: 330px){
        height: 70px;
        padding: 10px;
    }
`

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
        text-align: center;

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
            font-size: calc(var(--medium-font) - 1.5rem);

             &:hover{
                cursor: pointer;
                color: var(--hover-color);
                transition: all .3s ease-in-out;
            }
        }
    }
`

export const StyledUserNav = styled.div`
    display: flex;
    width: 10rem;
    text-align: center;
    margin-right: 1rem;
  
    
    ul{
        display: flex;
  
        li{
            padding: 5px;

            &:hover{
                cursor: pointer;
                color: var(--hover-color);
                transition: all .3s ease-in-out;
            }
        }
    }
`