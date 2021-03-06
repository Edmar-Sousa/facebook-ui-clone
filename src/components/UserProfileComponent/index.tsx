import { FaUser } from 'react-icons/fa'

import { 
    ProfileContainer,
    UserImage,
    TitleUser,
    Online
} from './style'


interface PropType {
    userName : string
    padding ?: string
    isOnline ?: boolean
    hoverColor ?: string
}


const ProfileComponent = (props : PropType) => {
    return (
        <ProfileContainer padding={ props.padding } hoverColor={props.hoverColor}>
            <UserImage>
                <FaUser fontSize={20} color="#515253" />

                { props.isOnline ? <Online /> : null }
            </UserImage>

            <TitleUser>{ props.userName }</TitleUser>
        </ProfileContainer>
    )
}

export default ProfileComponent
