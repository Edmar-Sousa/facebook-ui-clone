
import { HiOutlineVideoCamera } from 'react-icons/hi'
import { FaSearch, FaEllipsisH, FaPlus } from 'react-icons/fa'

import { 
    MenuContainer, 
    Title,
    FlexContainer,
    MenuSection,
    SubTitle
} from './style'

import AsideMenuItemComponent from '../AsideMenuItemComponent'
import UserProfileComponent from '../UserProfileComponent'
import RadiusButton from '../RadiusButton'

const AsideRightMenuComponent = () => {
    return (
        <MenuContainer>
            <FlexContainer>
                <Title>Contatos</Title>

                <FlexContainer>
                    <span>
                        <HiOutlineVideoCamera fontSize={20} />
                    </span>

                    <span>
                        <FaSearch fontSize={15} />
                    </span>

                    <span>
                        <FaEllipsisH fontSize={20} />
                    </span>
                </FlexContainer>
            </FlexContainer>

            <MenuSection>
                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" isOnline={true} />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>

                <AsideMenuItemComponent>
                    <UserProfileComponent userName="Usuario 1" />
                </AsideMenuItemComponent>
            </MenuSection>

            <Title>Conversas em grupo</Title>

            <AsideMenuItemComponent>
                <RadiusButton width="30px"><FaPlus /></RadiusButton>
                <SubTitle>Criar novo grupo</SubTitle>
            </AsideMenuItemComponent>
        </MenuContainer>
    )
}

export default AsideRightMenuComponent
