import { 
    AsideMenuContainer, 
    FlexContainer, 
    TitleItem, 
    SpanNotification,
    MenuSection,
    BlockIcon,
    ImageIcon
} from './style';

import MenuItemConponent     from '../AsideMenuItemComponent'
import ProfileComponent      from '../UserProfileComponent'
import ButtonRadiusComponent from '../RadiusButton'
import TitleMenuComponent    from '../TitleMenuComponent'

import { FaChevronDown } from 'react-icons/fa'

import FriendsImage     from '../../assets/friends.png'
import WatchImage       from '../../assets/watch.png'
import GroupImage       from '../../assets/group.png'
import MarketplaceImage from '../../assets/marketplace.png'
import MemoriesImage    from '../../assets/memories.png'

const AsideComponent = () => {
    return (
        <AsideMenuContainer>
            <MenuSection>

                <MenuItemConponent>
                    <ProfileComponent userName="Edinho Sousa" padding="0" />
                </MenuItemConponent>

                <MenuItemConponent>
                    <FlexContainer>
                        <span>
                            <ImageIcon src={FriendsImage} />
                        </span>

                        <TitleItem>Amigos</TitleItem>
                    </FlexContainer>
                </MenuItemConponent>

                <MenuItemConponent>
                    <FlexContainer>
                        <span>
                            <ImageIcon src={WatchImage} />
                        </span>

                        <FlexContainer flexDirection="column" align="left">
                            <TitleItem>Watch</TitleItem>
                            <SpanNotification>9 novos vídeos</SpanNotification>
                        </FlexContainer>
                    </FlexContainer>
                </MenuItemConponent>

                <MenuItemConponent>
                    <FlexContainer>
                        <span>
                            <ImageIcon src={GroupImage} />
                        </span>

                        <TitleItem>Grupos</TitleItem>
                    </FlexContainer>
                </MenuItemConponent>

                <MenuItemConponent>
                    <FlexContainer>
                        <span>
                            <ImageIcon src={MarketplaceImage} />
                        </span>

                        <TitleItem>Marketplace</TitleItem>
                    </FlexContainer>
                </MenuItemConponent>

                <MenuItemConponent>
                    <FlexContainer>
                        <span>
                            <ImageIcon src={MemoriesImage} />
                        </span>

                        <TitleItem>Lembranças</TitleItem>
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
