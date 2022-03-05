import styled from 'styled-components'


export const ProfileContainer = styled.div`
    padding: 5px;

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
