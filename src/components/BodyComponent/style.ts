import styled from 'styled-components'


export const BodyContainer = styled.main`
    position: relative;
    padding-top: 55px;

    max-width: 1200px;
    width: 100%;
    margin: auto;
    height: calc(100% - 55px);
`

export const RightAsideMenu = styled.div`
    background: #ff0;
`

export const Body = styled.div`
    position: relative;

    padding: 20px 0;

    width: 60%;
    margin: auto;

    @media (max-width: 1024px) {
        margin: initial;
        width: 80%;
    }

    @media (max-width: 954px) {
        width: 70%;
    }

    @media (max-width: 754px) {
        width: 100%;
    }
`