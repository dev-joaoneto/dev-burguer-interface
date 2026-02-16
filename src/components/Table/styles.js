import styled from 'styled-components';

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    border-radius: 20px;

    @media (max-width: 768px) {
        display: block;
        background: transparent;
    }
    
`;

export const Header = styled.thead`
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Tr = styled.tr`
    @media (max-width: 768px) {
        display: block;
        background-color: #fff;
        border-radius: 16px;
        margin-bottom: 16px;
        padding: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
`;

export const Th = styled.th`
    padding: 16px ;
    text-align: left;
    color: #fff;
    background-color: #484848;
    border-bottom: 1px solid #cdcdcd;
    line-height: 115%;

    &:first-child {
    border-top-left-radius: 20px;
    }
    &:last-child {
    border-top-right-radius: 20px;
    }
`;

export const Td = styled.td`
    padding: 16px ;
    color: #484848;
    font-weight: 500;
    line-height: 115%;
    
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #eee;

        &:last-child {
            border-bottom: none;
        }

        &::before {
            content: attr(data-label);
            font-weight: 600;
            color: #9758a6;
        }
    }
`;

export const Body = styled.tbody`
    @media (max-width: 768px) {
        display: block;
    }
`;
