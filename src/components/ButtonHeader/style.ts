import styled from 'styled-components'

export const ButtonContainer = styled.div`
    width: 100px;
    height: 100%;
    padding: 3px;

    cursor: pointer;

    margin: 0 5px;

    &.selected {
        color: RGB(26, 116, 228);
        border-bottom: 3px solid RGB(26, 116, 228);
    }

    &:not(.selected) button:hover {
        background: RGB(241, 242, 246);
    }
`

export const Button = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    text-align: center;
    line-height: 100%;

    background: none;
    border: none;

    cursor: pointer;
`