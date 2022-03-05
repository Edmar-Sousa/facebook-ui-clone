import { 
    ButtonContainer
} from './style'


interface PropType {
    children ?: any
    width ?: string
    margin ?: string
}

const RadiusButtonComponent = (props : PropType) => {
    return (
        <ButtonContainer width={props.width} margin={props.margin}>
            { props.children }
        </ButtonContainer>
    )
}

export default RadiusButtonComponent