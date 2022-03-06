import { 
    AsideMenuContainer, 
    FlexContainer, 
    TitleItem, 
    SpanNotification,
    MenuSection,
    BlockIcon
} from './style';

import MenuItemConponent from '../AsideMenuItemComponent'
import ProfileComponent from '../UserProfileComponent'
import ButtonRadiusComponent from '../RadiusButton'
import TitleMenuComponent from '../TitleMenuComponent'

import { FaUserFriends, FaUsers, FaChevronDown } from 'react-icons/fa'
import { BsDisplay, BsShop } from 'react-icons/bs'

const AsideComponent = () => {
    return (
        <AsideMenuContainer>
            <MenuSection>

                <MenuItemConponent>
                    <ProfileComponent userName="Edinho Sousa" padding="0" />
                </MenuItemConponent>

                <MenuItemConponent>
                    <FlexContainer>
                        <FaUserFriends fontSize={25} />
                        <TitleItem>Amigos</TitleItem>
                    </FlexContainer>
                </MenuItemConponent>

                <MenuItemConponent>
                    <FlexContainer>
                        <BsDisplay fontSize={25} />

                        <FlexContainer flexDirection="column">
                            <TitleItem>Watch</TitleItem>
                            <SpanNotification>9 novos vídeos</SpanNotification>
                        </FlexContainer>
                    </FlexContainer>
                </MenuItemConponent>

                <MenuItemConponent>
                    <FlexContainer>
                        <FaUsers fontSize={25} />
                        <TitleItem>Grupos</TitleItem>
                    </FlexContainer>
                </MenuItemConponent>

                <MenuItemConponent>
                    <FlexContainer>
                        <BsShop fontSize={25} />
                        <TitleItem>Marketplace</TitleItem>
                    </FlexContainer>
                </MenuItemConponent>

                <MenuItemConponent>
                    <FlexContainer>
                        <ButtonRadiusComponent width="30px" margin="0">
                            <FaChevronDown />
                        </ButtonRadiusComponent>
                        <TitleItem>Ver mais</TitleItem>
                    </FlexContainer>
                </MenuItemConponent>
            </MenuSection>

            <TitleMenuComponent />

            <MenuItemConponent>
                <FlexContainer align="center">
                    <BlockIcon />
                    <TitleItem>Atalho 1</TitleItem>
                </FlexContainer>
            </MenuItemConponent>

            <MenuItemConponent>
                <FlexContainer align="center">
                    <BlockIcon />
                    <TitleItem>Atalho 2</TitleItem>
                </FlexContainer>
            </MenuItemConponent>

            <MenuItemConponent>
                <FlexContainer align="center">
                    <BlockIcon />
                    <TitleItem>Atalho 3</TitleItem>
                </FlexContainer>
            </MenuItemConponent>

            <MenuItemConponent>
                <FlexContainer align="center">
                    <BlockIcon />
                    <TitleItem>Atalho 4</TitleItem>
                </FlexContainer>
            </MenuItemConponent>

            <MenuItemConponent>
                <FlexContainer align="center">
                    <BlockIcon />
                    <TitleItem>Atalho 5</TitleItem>
                </FlexContainer>
            </MenuItemConponent>

            <MenuItemConponent>
                <FlexContainer align="center">
                    <BlockIcon />
                    <TitleItem>Atalho 6</TitleItem>
                </FlexContainer>
            </MenuItemConponent>

            <MenuItemConponent>
                <FlexContainer align="center">
                    <BlockIcon />
                    <TitleItem>Atalho 7</TitleItem>
                </FlexContainer>
            </MenuItemConponent>

            <MenuItemConponent>
                <FlexContainer align="center">
                    <BlockIcon />
                    <TitleItem>Atalho 8</TitleItem>
                </FlexContainer>
            </MenuItemConponent>
            
        </AsideMenuContainer>
    )
}

export default AsideComponent
