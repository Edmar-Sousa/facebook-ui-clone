
import { FaEllipsisH, FaRegComment } from 'react-icons/fa'
import { BiLike, BiShare } from 'react-icons/bi'

import {
    CardComponent,
    CardHeader,
    UserImage,
    FlexContainer,
    UserName,
    CardImage,
    PostInfos,
    Paragraph,
    PostButton,
    ButtonContainer
} from './style'

const PostCardComponent = () => {
    return (
        <CardComponent>
            <CardHeader>
                <FlexContainer>
                    <FlexContainer>
                        <UserImage />
                        <UserName>Lorem</UserName>
                    </FlexContainer>

                    <FaEllipsisH fontSize={20} />
                </FlexContainer>
            </CardHeader>

            <CardImage />
            <PostInfos>
                <FlexContainer>
                    <Paragraph><BiLike fontSize={20} /> 370</Paragraph>
                    <Paragraph>96 comentários 5 compartilhamentos</Paragraph>
                </FlexContainer>
            </PostInfos>

            <ButtonContainer>
                <FlexContainer>
                    <PostButton>
                        <BiLike fontSize={20} /> Curtir
                    </PostButton>

                    <PostButton>
                        <FaRegComment fontSize={20} />Comentar
                    </PostButton>

                    <PostButton>
                        <BiShare fontSize={20} /> Compartilhar
                    </PostButton>
                </FlexContainer>
            </ButtonContainer>
        </CardComponent>
    )
}


export default PostCardComponent