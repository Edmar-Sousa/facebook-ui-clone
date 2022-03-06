
import { BodyContainer, Body, RightAsideMenu } from './style'

import AsideMenuComponent from '../AsideMenuComponent'
import AsideRightMenuComponent from '../AsideRightMenuComponent'
import StoreComponent from '../StoreComponent'

const BodyComponent = () => {
    return (
        <BodyContainer>
            <AsideMenuComponent />

            <Body>
                <StoreComponent />
            </Body>
            
            <RightAsideMenu>
                <AsideRightMenuComponent />
            </RightAsideMenu>
        </BodyContainer>
    )
}

export default BodyComponent
