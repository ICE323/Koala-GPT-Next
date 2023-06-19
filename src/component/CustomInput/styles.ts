import styled from "styled-components";

export const FormContainer = styled.div`
    margin-top: 24px;
    p {
        font-size: 16px;
        color: #D1D5DB;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .ant-select {
        height: 62px;
        width: 100%;
    }
    .ant-select-selector {
        height: 62px !important;
        background: #1A232A !important;
    }
    .ant-select-selection-item, .ant-select-selection-search {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 20px !important;
        color: #d1d5d5 !important;
    }
    .ant-select-arrow{
        color: #6B7280;
        font-size: 16px;
    }
    .ant-select-item-option-content {
        font-size: 18px !important;
    }
    .custom-input {
        height: 62px;
        font-weight: 600;
        background: #1A232A !important;
        color: #d1d5d5 !important;
        font-size: 20px !important;
    }
`;
export const SubText = styled.div`
    margin-top: 12px;
    color: #9ca3af;
    font-weight: 500;
    line-height: 1.2rem;
    font-size: 14px;
`;