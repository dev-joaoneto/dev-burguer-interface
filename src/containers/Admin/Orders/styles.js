import styled from "styled-components";
import Select from 'react-select'

export const ProductImage = styled.img`
    height: 100px;
    padding: 12px;
    border-radius: 16px;

`;

export const SelectStatus = styled(Select)`
    width: 240px;
`;

export const Filter = styled.div`
display: flex;
justify-content: center;
margin: 28px 0;
gap:50px;
`;

export const FilterOption = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${(props) => props.$isActiveStatus ? '#9758a6' : '#625e5e'};
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 5px;
    border-bottom: ${(props) => props.$isActiveStatus ? '2px solid #9758a6' : 'none'};
`;