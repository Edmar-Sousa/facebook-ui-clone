import { FaBars, FaSearch, FaFacebookMessenger, FaBell, FaCaretDown } from 'react-icons/fa'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

import { 
    HeaderContainer,
    SearchContainer, 
    FlexContainer, 
    InputSearch,
    MenuContainer,
    HiddenButonMaxWidth,
    BarButton,
    CenterMenu
} from './style'


import ButtonComponent       from '../ButtonHeader'
import UserProfileComponent  from '../UserProfileComponent'
import RadiusButtonComponent from '../RadiusButton'

import HomeIcon     from '../../icons/HomeIcon'
import DisplayIcon  from '../../icons/DisplayIcon'
import ShopIcon     from '../../icons/ShopIcon'
import GroupIcon    from '../../icons/GroupIcon'
import GameIcon     from '../../icons/GameIcon'
import FacebookIcon from '../../icons/FacebookIcon'

const HeaderComponent = () => {
    return (
        <HeaderContainer>
            <FlexContainer justify="space-between">
                <FlexContainer>
                    <FacebookIcon />

                    <SearchContainer>
                        <FlexContainer>
                            <FaSearch color="#66676b" />
                            <InputSearch placeholder="Pesquisar no Facebook" />
                        </FlexContainer>
                    </SearchContainer>
                </FlexContainer>

                <CenterMenu>
                    <FlexContainer>
                        <ButtonComponent selectedButton={true}>
                            <HomeIcon fill="#1a74e4" stroke="#1a74e4" />
                        </ButtonComponent>

                        <ButtonComponent>
                            <DisplayIcon stroke="#67686c" /> 
                        </ButtonComponent>

                        <ButtonComponent>
                            <ShopIcon stroke="#67686c" />
                        </ButtonComponent>

                        <ButtonComponent>
                            <GroupIcon stroke="#67686c" />
                        </ButtonComponent>

                        <ButtonComponent>
                            <GameIcon stroke="#67686c" />
                        </ButtonComponent>
                    </FlexContainer>
                </CenterMenu>

                <MenuContainer>
                    <HiddenButonMaxWidth>
                        <FlexContainer>
                            <UserProfileComponent userName="Edinho" hoverColor="rgba(32, 32, 32, 0.1)" />

                            <RadiusButtonComponent>
                                <BsFillGrid3X3GapFill fontSize={20} />
                            </RadiusButtonComponent>

                            <RadiusButtonComponent>
                                <FaFacebookMessenger fontSize={20} />
                            </RadiusButtonComponent>

                            <RadiusButtonComponent>
                                <FaBell fontSize={20} />
                            </RadiusButtonComponent>

                            <RadiusButtonComponent>
                                <FaCaretDown fontSize={20} />
                            </RadiusButtonComponent>
                        </FlexContainer>
                    </HiddenButonMaxWidth>

                    <BarButton>
                        <FaBars fontSize={25} />
                    </BarButton>
                </MenuContainer>
            </FlexContainer>
        </HeaderContainer>
    )
}

export default HeaderComponent
