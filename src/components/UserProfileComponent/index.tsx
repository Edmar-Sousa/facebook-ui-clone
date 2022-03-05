import { FaUser } from 'react-icons/fa'

import { ProfileContainer, UserImage, TitleUser } from './style'

interface PropType {
    userName : string
    padding ?: string
}


const ProfileComponent = (props : PropType) => {
    return (
        <ProfileContainer padding={ props.padding }>
            <UserImage>
                <FaUser fontSize={20} color="#515253" />
            </UserImage>

            <TitleUser>{ props.userName }</TitleUser>
        </ProfileContainer>
    )
}

export default ProfileComponent
