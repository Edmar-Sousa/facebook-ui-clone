
import { HiVideoCamera } from 'react-icons/hi'
import { ImFilePicture } from 'react-icons/im'
import { BiHappyAlt } from 'react-icons/bi'

import {
    NewPostContainer,
    HeaderNewPost,
    UserImage,
    InputPost,
    PostTypes,
    ButtonPostType
} from './style'

const NewPostComponent = () => {
    return (
        <NewPostContainer>
            <HeaderNewPost>
                <UserImage></UserImage>
                <InputPost type="text" placeholder="No que você está pensando?"/>
            </HeaderNewPost>

            <PostTypes>
                <ButtonPostType>
                    <HiVideoCamera fontSize={25} color="#ea465f" /> Vídeo ao vivo
                </ButtonPostType>

                <ButtonPostType>
                    <ImFilePicture fontSize={20} color="#45bd63" /> Foto/vídeo
                </ButtonPostType>

                <ButtonPostType>
                    <BiHappyAlt fontSize={25} color="#ebb948" /> Sentimento/atividade
                </ButtonPostType>
            </PostTypes>
        </NewPostContainer>
    )
}

export default NewPostComponent
