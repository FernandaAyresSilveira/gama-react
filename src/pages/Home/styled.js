import styled from "styled-components";

export const HomeContainer = styled.div`
width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Content = styled.div`
    width: 100vw;
    display:flex;
    align-itens: center;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    boder-radius: .25rem 0 0 .25rem;

    &:focus,
    &:active{
        outline:none;
        box-shandow: none;
    }
`

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color:#fff;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active{
        outline:none;
        box-shandow: none;
    }
`

export const ErrorMsg = styled.span`
    display:block;
    font-size: 0.65rem;
    color:red;
    font-weight: 600;
    margin-top: 1rem;

`
