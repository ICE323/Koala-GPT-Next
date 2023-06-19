import styled from "styled-components";

export const HomeHeader = styled.div`
    padding-bottom: 60px;
    & > :nth-child(2) {
        margin-top: 40px;
    }
    h1 {
        font-size: 60px;
        color: #fff;
        display: flex;
        align-items: center;
        img {
            margin-right: 20px;
        }
    }
    p {
        font-size: 20px;
        margin-top: 20px;
        line-height: 1.75rem;
        span {
            color: #60A5FA;
            cursor: pointer;
            transition: all .3s ease-in-out;
            &:hover {
                color: #2563EB;
            }
        }
    }
`;