import styled from "styled-components";

export const Sidebar = styled.div`
    min-width: 250px;
    max-width: 250px;
    min-height: 100vh;
    padding: 0.5rem;
`
export const MenuItem = styled.div<{selected ?: boolean}>`
    width: 100%;
    margin-top: 4px;
    padding: 8px;
    cursor: pointer;
    font-size: 16px;
    color: #D1D5DB;
    display: flex;
    font-weight: 600;
    align-items: center;
    background-color: ${({selected}) => selected && "#374151"};
    border-radius: 5px;
    span {
        margin-left: 15px;
    }
`