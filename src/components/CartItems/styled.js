import styled from "styled-components";

export const ProductImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 16px;`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        border-radius: 4px;
        background-color: #9758a6;
        border: none;
        cursor: pointer;
        transition: all 0.4s ease-in-out;

        &:hover {
            background-color: #6f357c;
            border: 1px double #fff;
        }
    }
    `;

export const EmptyCartRow = styled.tr`
    text-align: center;
`;   

export const EmptyCartTd = styled.td`
    font-size: 20px;
    font-weight: bold;
    
`;

export const TotalPrice = styled.p`
    font-weight: bold;
`;

export const TrashImage = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }
`;
