import { 
    ButtonContainer
} from './style'


interface PropType {
    children ?: any
}

const RadiusButtonComponent = (props : PropType) => {
    return (
        <ButtonContainer>
            { props.children }
        </ButtonContainer>
    )
}

export default RadiusButtonComponent