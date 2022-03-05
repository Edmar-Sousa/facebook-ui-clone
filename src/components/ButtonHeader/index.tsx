import {
    ButtonContainer, Button
} from './style'


interface PropsType {
    selectedButton ?: boolean
    children ?: any
}

const ButtonComponent = (props : PropsType) => {
    return (
        <ButtonContainer className={ props.selectedButton ? 'selected' : '' }>
            <Button>
                { props.children }
            </Button>
        </ButtonContainer>
    )
}

export default ButtonComponent