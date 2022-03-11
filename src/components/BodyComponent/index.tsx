
import { BodyContainer, Body, RightAsideMenu } from './style'

import AsideMenuComponent from '../AsideMenuComponent'
import AsideRightMenuComponent from '../AsideRightMenuComponent'
import StoreComponent from '../StoreComponent'
import NewPostComponent from '../NewPostComponent'
import RoomComponent from '../RoomComponent'
import PostCardComponent from '../PostCardComponent'


const BodyComponent = () => {
    return (
        <BodyContainer>
            <AsideMenuComponent />

            <Body>
                <StoreComponent />
                <NewPostComponent />
                <RoomComponent />

                <PostCardComponent />
                <PostCardComponent />
            </Body>
            
            <RightAsideMenu>
                <AsideRightMenuComponent />
            </RightAsideMenu>
        </BodyContainer>
    )
}

export default BodyComponent
