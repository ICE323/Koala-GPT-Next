import styled from "styled-components";

export const AnswerContainer = styled.div`
    width: 100%;
    padding-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const AnswerWrapper = styled.div`
    max-width: 800px;
    line-height: 45px;
    font-size: 18px;
    h1 {
        color: #fff;
        font-weight: 700;
    }
    p, li {
        line-height: 30px;
    }
`
export const BtnContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin-bottom: 50px;
    button {
        color: #000;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 12px;
        background-color: #fff;
        transition: all .3s ease-in-out;
        outline: none;
        border: none;
        border-radius: 5px;
        &:hover {
            background-color: #CFD1D2;
        }
    }
`