
import { BodyContainer, Body, RightAsideMenu } from './style'

import AsideMenuComponent from '../AsideMenuComponent'
import AsideRightMenuComponent from '../AsideRightMenuComponent'
import StoreComponent from '../StoreComponent'
import NewPostComponent from '../NewPostComponent'
import RoomComponent from '../RoomComponent'


const BodyComponent = () => {
    return (
        <BodyContainer>
            <AsideMenuComponent />

            <Body>
                <StoreComponent />
                <NewPostComponent />
                <RoomComponent />
            </Body>
            
            <RightAsideMenu>
                <AsideRightMenuComponent />
            </RightAsideMenu>
        </BodyContainer>
    )
}

export default BodyComponent
