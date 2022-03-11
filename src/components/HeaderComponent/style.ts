import styled from 'styled-components'

interface FlexContainerPropType {
    justify ?: 'space-between' | 'center'
}

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;

    justify-content: ${(props : FlexContainerPropType) => props.justify ? props.justify : '' };
`

export const HeaderContainer = styled.header`
    width: 100%;
    height: 55px;

    position: fixed;
    top: 0;
    z-index: 10;

    padding: 0 20px;
    box-shadow: 0 0 10px rgba(180, 182, 182, 0.6);

    background: #fff;
`

export const SearchContainer = styled.div`
    min-width: 40px;
    max-width: 250px;
    height: 40px;

    padding: 0 10px;

    border-radius: 20px;
    background: RGB(241, 242, 246);
    margin: 0 10px;
`

export const InputSearch = styled.input`
    width: 100%;
    height: 40px;

    padding: 0 10px;
    font-size: 12pt;

    background: none;
    border: none;
    outline: none;

    @media (max-width: 1190px) {
        display: none;
    }
`

export const MenuContainer = styled.nav`
    height: 100%;
`

export const CenterMenu = styled.div`
    height: 100%;

    @media (max-width: 754px) {
        display: none;
    }
`

export const HiddenButonMaxWidth = styled.div`
    height: 100%;

    @media(max-width: 980px) {
        display: none;
    }
`

export const BarButton = styled.button`
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 7px 20px;

    border-radius: 20px;
    border: none;
    background: RGB(241, 242, 246);

    display: none;

    @media(max-width: 980px) {
        display: block;
    }
`
