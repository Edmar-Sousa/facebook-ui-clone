import styled from 'styled-components'

export const NewPostContainer = styled.div`
    max-width: 500px;
    width: 100%;
    height: 100px;

    margin: 20px auto;
    border-radius: 10px;

    background: #fff;
`

export const HeaderNewPost = styled.div`
    width: 95%;
    height: 50px;

    margin: auto;
    border-bottom: 1px solid #e6e6e8;

    display: flex;
    align-items: center;

`

export const UserImage = styled.div`
    width: 40px;
    height: 40px;

    border-radius: 20px;
    background: #000;

    margin-right: 10px;
`

export const InputPost = styled.input`
    flex: 1;
    height: 40px;

    border-radius: 20px;
    border: none;

    padding: 0 15px;
    font-size: 13pt;
    outline: none;

    background: #e9eaec;

    &:hover {
        background: #dedfe0;
    }
`

export const PostTypes = styled.div`
    width: 95%;
    height: 50px;

    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 500px) {
        button:last-child {
            display: none;
        }
    }
`

export const ButtonPostType = styled.button`
    padding: 5px;
    font-size: 13pt;

    display: flex;
    align-items: center;

    border: none;

    cursor: pointer;
    border-radius: 5px;
    background: none;
    color: #6a6760;

    &:hover {
        background: #dedfe0;
    }

    & svg {
        margin-right: 5px;
    }
`
