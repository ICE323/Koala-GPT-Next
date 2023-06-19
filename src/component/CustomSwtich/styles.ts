import styled from "styled-components";

export const CustomSwitchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    p {
        font-size: 16px;
        display: flex;
        flex-direction: column;
        color: #d1d5db;
        margin-left: 13px;
        margin-bottom: 0;
        font-weight: 600;
        span {
            color: #9ca3af;
            margin-top: 4px;
            font-size: 14px;
            line-height: 1.2rem;
        }
    }
    .ant-switch {
        background-color: #9CA3AF;
    }
    .ant-switch-checked {
       background-color: #2563EB;
    }
`