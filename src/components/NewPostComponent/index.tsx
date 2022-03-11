
import { BiHappyAlt } from 'react-icons/bi'

import {
    NewPostContainer,
    HeaderNewPost,
    UserImage,
    InputPost,
    PostTypes,
    ButtonPostType
} from './style'


import CreateCameraIcon from '../../icons/CameraCreateIcon'
import PictureIcon      from '../../icons/PictureIcon'

const NewPostComponent = () => {
    return (
        <NewPostContainer>
            <HeaderNewPost>
                <UserImage></UserImage>
                <InputPost type="text" placeholder="No que você está pensando?"/>
            </HeaderNewPost>

            <PostTypes>
                <ButtonPostType>
                    <CreateCameraIcon /> Vídeo ao vivo
                </ButtonPostType>

                <ButtonPostType>
                    <PictureIcon /> Foto/vídeo
                </ButtonPostType>

                <ButtonPostType>
                    <BiHappyAlt fontSize={25} color="#ebb948" /> Sentimento/atividade
                </ButtonPostType>
            </PostTypes>
        </NewPostContainer>
    )
}

export default NewPostComponent
