import styled from 'styled-components'

export const MenuItemContainer = styled.div`
    width: 100%;
    height: 40px;

    cursor: pointer;
    margin: 5px 0;

    display: flex;
    align-items: center;

    padding: 0 10px;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    &:hover {
        background: rgba(32, 32, 32, 0.1);
    }
`
