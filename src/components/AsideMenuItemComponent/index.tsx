import { MenuItemContainer } from './style'

interface PropType {
    children ?: any
}

const AsideMenuItemComponent = (props : PropType) => {
    return (
        <MenuItemContainer>
            { props.children }
        </MenuItemContainer>
    )
}

export default AsideMenuItemComponent
