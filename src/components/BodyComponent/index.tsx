
import { BodyContainer, Body, RightAsideMenu } from './style'

import AsideMenuComponent from '../AsideMenuComponent'
import AsideRightMenuComponent from '../AsideRightMenuComponent'
import StoreComponent from '../StoreComponent'
import NewPostComponent from '../NewPostComponent'


const BodyComponent = () => {
    return (
        <BodyContainer>
            <AsideMenuComponent />

            <Body>
                <StoreComponent />
                <NewPostComponent />
            </Body>
            
            <RightAsideMenu>
                <AsideRightMenuComponent />
            </RightAsideMenu>
        </BodyContainer>
    )
}

export default BodyComponent
