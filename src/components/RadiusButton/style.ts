import styled from 'styled-components'

interface PropType {
    width ?: string
    margin ?: string
}

export const ButtonContainer = styled.button`
    width: ${(props : PropType) => props.width ? props.width : '40px'};
    height: ${(props : PropType) => props.width ? props.width : '40px'};

    border: none;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    margin: 0 ${(props : PropType) => props.margin ? props.margin : '5px'};

    background: RGB(229, 230, 235);

    &:hover {
        background: RGB(180, 181, 185);
    }
`
