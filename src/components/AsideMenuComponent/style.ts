import styled from 'styled-components'


export const AsideMenuContainer = styled.aside`
    overflow-y: hidden;

    width: 20%;

    top: 55px;
    left: 0;
    bottom: 0;

    position: fixed;
    z-index: 9;

    background: #f1f2f6;

    padding-top: 15px;
    padding-left: 10px;

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

`

interface PropType {
    flexDirection ?: 'column' | 'row'
    align ?: 'center'
}

export const FlexContainer = styled.div`
    display: flex;

    align-items: ${(porps : PropType) => porps.align ? porps.align : ''};
    flex-direction: ${(props : PropType) => props.flexDirection ? props.flexDirection : ''};
`

export const TitleItem = styled.h4`
    margin-left: 10px;
    font-family: Arial;
`

export const SpanNotification = styled.span`
    margin-left: 10px;
    color: #1975f0;
    font-size: 9pt;
    font-family: Arial;
`

export const MenuSection = styled.div`
    border-bottom: 1px solid #cfd0d4;
`

export const BlockIcon = styled.div`
    width: 30px;
    height: 30px;

    border-radius: 5px;

    background: #000;
`
