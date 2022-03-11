import styled from 'styled-components'


export const Container = styled.div`
    max-width: 500px;
    width: 100%;
    height: 70px;
    margin: 20px auto;
    position: relative;
`

export const RoomContainer = styled.div`
    border-radius: 10px;
    padding: 10px 20px;

    overflow-x: auto;
    display: flex;
    align-items: center;

    &::-webkit-scrollbar {
        display: none;
    }

    background: #fff;
`

export const CreateRoomButton = styled.button`
    height: 35px;
    padding: 0 10px;

    display: flex;
    align-items: center;
    color: #52639b;

    font-weight: bold;
    font-family: Arial;

    border-radius: 17px;
    border: 2px solid #ebf2f8;
    background: none;
    cursor: pointer;
    min-width: 120px;

    &:hover {
        background: #e5e6eb;
    }
`

export const UserRoom = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;

    margin: 0 10px;

    background: #e5e6eb;
`

export const RoomList = styled.ul`
    list-style: none;
    display: flex;
`

interface ButtonScrollType {
    left ?: string
    right ?: string
}

export const ButtonScroll = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    
    position: absolute;
    top: 10px;
    right: ${(props : ButtonScrollType) => props.right ? props.right : ''};
    left: ${(props : ButtonScrollType) => props.left ? props.left : ''};

    z-index: 9;
    
    border: none;
    border: 1px solid #828385;

    cursor: pointer;
`
