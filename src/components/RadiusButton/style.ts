import styled from 'styled-components'


export const ButtonContainer = styled.button`
    width: 40px;
    height: 40px;

    border: none;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    margin: 0 5px;

    background: RGB(229, 230, 235);

    &:hover {
        background: RGB(180, 181, 185);
    }
`
