import { FaFacebook, FaSearch, FaFacebookMessenger, FaBell, FaCaretDown } from 'react-icons/fa'
import { BsHouseFill, BsDisplay, BsShop } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { SiFacebookgaming } from 'react-icons/si'

import { BsFillGrid3X3GapFill } from 'react-icons/bs'

import { 
    HeaderContainer, SearchContainer, FlexContainer, InputSearch,
    MenuContainer
} from './style'


import ButtonComponent from '../ButtonHeader'
import UserProfileComponent from '../UserProfileComponent'
import RadiusButtonComponent from '../RadiusButton'

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
                            <BsHouseFill fontSize="25" color="#1a74e4" />
                        </ButtonComponent>

                        <ButtonComponent>
                            <BsDisplay fontSize="25" color="#67686c" />
                        </ButtonComponent>

                        <ButtonComponent>
                            <BsShop fontSize="25" color="#67686c" />
                        </ButtonComponent>

                        <ButtonComponent>
                            <FaUsers fontSize="25" color="#67686c" />
                        </ButtonComponent>

                        <ButtonComponent>
                            <SiFacebookgaming fontSize="25" color="#67686c" />
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
