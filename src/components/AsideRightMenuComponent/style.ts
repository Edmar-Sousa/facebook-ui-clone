import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
`

export const MenuContainer = styled.aside`
    overflow-y: hidden;

    position: fixed;
    width: 20%;
    top: 55px;
    right: 0;
    bottom: 0;

    padding: 10px;
    background: #f1f2f6;

    &:hover {
        overflow-y: scroll;
    }

    &::-webkit-scrollbar {
        width: 10px;

        &:hover {
            background: #939396;
        }
    }

    &::-webkit-scrollbar-thumb {
        width: 5px;
        border-radius: 5px;
        background: #b3b3b6;
    }

    & span {
        margin: 0 10px;
    }

    @media (max-width: 954px) {
        width: 30%;
    }

    @media (max-width: 754px) {
        display: none;
    }
`

export const Title = styled.h4`
    margin-top: 20px;
    font-family: Arial;
    color: #6e6f73;
`

export const MenuSection = styled.div`
    width: 100%;
    border-bottom: 1px solid #000;
`

export const SubTitle = styled.p`
    font-size: 15px;
    font-family: Arial;
`