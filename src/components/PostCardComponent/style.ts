import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardComponent = styled.div`
    max-width: 500px;
    width: 100%;

    background: #fff;

    padding: 10px 0;
    border-radius: 10px;

    margin: 10px auto;
`

export const CardHeader = styled.div`
    width: 100%;
    height: 50px;

    padding: 0 10px;
`

export const UserImage = styled.div`
    width: 40px;
    height: 40px;

    margin-right: 10px;

    border-radius: 20px;
    background: #000;
`

export const UserName = styled.h4`
    font-family: Arial;
`

export const CardImage = styled.div`
    width: 100%;
    height: 500px;

    background: #000;
`

export const PostInfos = styled.div`
    width: 95%;
    height: 30px;

    margin: 10px auto;
    border-bottom: 1px solid #6d717d;
`

export const Paragraph = styled.p`
    font-family: Arial;
    color: #6d717d;
`

export const ButtonContainer = styled.div`
    width: 100%;
    padding: 0 10px;
`

export const PostButton = styled.button`
    flex: 1;
    height: 30px;

    border: none;
    background: none;

    cursor: pointer;
    font-weight: 600;

    color: #6f6657;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #f1f2f6;
    }

    & svg {
        margin-right: 10px;
    }
`
