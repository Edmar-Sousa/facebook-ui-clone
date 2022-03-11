import { FaFacebook, FaSearch, FaFacebookMessenger, FaBell, FaCaretDown } from 'react-icons/fa'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'

import { 
    HeaderContainer, SearchContainer, FlexContainer, InputSearch,
    MenuContainer
} from './style'


import ButtonComponent from '../ButtonHeader'
import UserProfileComponent from '../UserProfileComponent'
import RadiusButtonComponent from '../RadiusButton'

import HomeIcon from '../../icons/HomeIcon'
import DisplayIcon from '../../icons/DisplayIcon'
import ShopIcon from '../../icons/ShopIcon'
import GroupIcon from '../../icons/GroupIcon'
import GameIcon from '../../icons/GameIcon'

const HeaderComponent = () => {
    return (
        <HeaderContainer>
            <FlexContainer justify="space-between">
                <FlexContainer>
                    <FaFacebook fontSize="40" color="#129cf7" />

                    <SearchContainer>
                        <FlexContainer>
                            <FaSearch color="#66676b" />
                            <InputSearch placeholder="Pesquisar no Facebook" />
                        </FlexContainer>
                    </SearchContainer>
                </FlexContainer>

                <MenuContainer>
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
                </MenuContainer>

                <MenuContainer>
                    <FlexContainer>
                        <UserProfileComponent userName="Edinho" />

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
                </MenuContainer>
            </FlexContainer>
        </HeaderContainer>
    )
}

export default HeaderComponent
