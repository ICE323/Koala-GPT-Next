import styled from "styled-components";

export const GPTContianer = styled.div`
    
`;
export const VersionContainer = styled.div`
    p {
        margin-bottom: 8px;
        font-size: 16px;
    }
    span {
        font-size: 14px;
        color: #9CA3AF;
    }
`;
export const VersionBtns = styled.div<{version ?: boolean}>`
    display: flex;
    gap: 10px;
    margin-top: 16px;
    & > :nth-child(${({version}) => version ? 1 : 2}) {
        background-color: #2563EB;
        color: #fff;
        cursor: pointer;
        user-select: auto;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: #3B82F6;
        }
    }
    button {
        color: #000;
        width: 94px;
        height: 44px;
        display: flex;
        border: none;
        font-weight: 700;
        border-radius: 5px;
        outline: none;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        cursor: not-allowed;
        background-color: #CBCDCF;
        user-select: none;
    }
`;
export const SeoContainer = styled.div`
    margin-top: 40px;
`
export const SeoHeader = styled.div`
    display: flex;
    justify-content: space-between;
    p {
        color: #d1d5db;
        font-size: 16px;
        font-weight: 600;
    }
    span {
        color: #60a5fa;
        font-size: 14px;
    }
`
export const SeoContent = styled.div`
    & > :last-child {
        color: #60a5fa;   
    }
    p {
        color: #9ca3af;
        font-size: 14px;
        margin-bottom: 10px;
        line-height: 1.25rem;
    }
`
export const SeoBtns = styled.div<{seo ?: number}>`
    display: flex;
    gap: 10px;
    margin-top: 16px;
    button {
        width: 142px;
        height: 44px;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        outline: none;
        border: none;
        align-items: center;
        font-size: 14px;
        background-color: #fff;
        font-weight: 600;
        cursor: pointer;
        color: #000;
    }
    & > :nth-child(${({seo}) => seo}) {
        background-color: #2563EB;
        color: #fff;
        cursor: pointer;
        user-select: auto;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: #3B82F6;
        }
    }
    & > :last-child {
        cursor: not-allowed;
        background-color: #CBCDCF;
        user-select: none;
    }
`
export const CreateButton = styled.div`
    margin-top: 28px;
    padding: 16px 24px;
    color: #fff;
    font-size: 18px;
    background: #1d4ed8;
    border-radius: 5px;
    width: fit-content;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        background: #2563EB;
    }
`
export const Usage = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    p {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 0 10px;
        background-color: #22C55E;
    }
    span {
        color: #60a5fa;
        margin-left: 5px;
        transition: all .3s ease-in-out;
        &:hover {
            text-decoration: underline;
            cursor: pointer;
            color: #2563EB;
        }
    }
`
export const RealTimeBtns = styled.div<{ realtime ?: number}>`
    display: flex;
    gap: 10px;
    margin-top: 16px;
    button {
        width: 142px;
        height: 44px;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        outline: none;
        border: none;
        align-items: center;
        font-size: 14px;
        background-color: #fff;
        font-weight: 600;
        cursor: pointer;
        color: #000;
    }
    & > :nth-child(${({realtime}) => realtime}) {
        background-color: #2563EB;
        color: #fff;
        cursor: pointer;
        user-select: auto;
        transition: all .3s ease-in-out;
        &:hover {
            background-color: #3B82F6;
        }
    }
`