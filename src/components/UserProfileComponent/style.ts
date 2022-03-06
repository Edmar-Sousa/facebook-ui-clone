import styled from 'styled-components'


interface PropType {
    padding ?: string
}

export const ProfileContainer = styled.div`
    padding: ${(props : PropType) => props.padding ? props.padding : '5px'};

    height: 35px;

    display: flex;
    align-items: center;

    border-radius: 15px;
    cursor: pointer;

    &:hover {
        background: RGB(241, 242, 246);
    }
`

export const UserImage = styled.div`
    width: 30px;
    height: 30px;

    position: relative;

    border-radius: 15px;
    margin-right: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: RGB(206, 207, 211);
`

export const TitleUser = styled.h4`
    font-family: Arial;
`

export const Online = styled.span`
    width: 10px;
    height: 10px;

    position: absolute;
    bottom: 0;
    left: 10px;

    border-radius: 5px;

    background: #449658;
`
