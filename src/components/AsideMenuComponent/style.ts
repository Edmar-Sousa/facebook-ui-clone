import styled from 'styled-components'


export const AsideMenuContainer = styled.aside`
    overflow-y: hidden;

    padding-top: 15px;
    padding-left: 10px;

    &:hover {
        overflow-y: scroll;
    }

    &::-webkit-scrollbar {
        width: 10px;
        background: #000;
    }

`

interface PropType {
    flexDirection ?: 'column' | 'row'
}

export const FlexContainer = styled.div`
    display: flex;

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
