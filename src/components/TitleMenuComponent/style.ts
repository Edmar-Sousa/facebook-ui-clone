import styled from 'styled-components'


export const FlexContainer = styled.div`
    height: 50px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 20px;

    &:hover a {
        display: block;
    }
`

export const TitleMenu = styled.h4`
    font-family: Arial;
    color: #76777b;
`

export const ButtonLink = styled.a`
    text-decoration: none;
    color: #1a74e4;

    display: none;
    margin-right: 10px;

    font-family: Arial;

    padding: 10px;
    border-radius: 5px;

    &:hover {
        background: RGB(241, 242, 246);
    }
`
