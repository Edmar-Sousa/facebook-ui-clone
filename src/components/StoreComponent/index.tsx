
import { BsPlusCircleFill } from 'react-icons/bs'

import {
    StoryContainer,
    StoryCard,
    FooterCard,
    AddStoryPlusBtn,
    TitleStory,
    UserStory,
    UserImageContainer
} from './style'

const StoreAreaComponent = () => {
    return (
        <StoryContainer>
            <StoryCard>
                <FooterCard>
                    <AddStoryPlusBtn>
                        <BsPlusCircleFill fontSize={34} color="#1c75eb" />
                    </AddStoryPlusBtn>

                    <TitleStory textAlign="center">Criar story</TitleStory>
                </FooterCard>
            </StoryCard>

            <StoryCard>
                <UserStory>
                    <UserImageContainer />
                </UserStory>

                <FooterCard FillBg='#0000'>
                    <TitleStory textAlign="left" color="#fff">Criar story</TitleStory>
                </FooterCard>
            </StoryCard>

            <StoryCard>
                <UserStory>
                    <UserImageContainer />
                </UserStory>

                <FooterCard FillBg='#0000'>
                    <TitleStory textAlign="left" color="#fff">Criar story</TitleStory>
                </FooterCard>
            </StoryCard>

            <StoryCard>
                <UserStory>
                    <UserImageContainer />
                </UserStory>

                <FooterCard FillBg='#0000'>
                    <TitleStory textAlign="left" color="#fff">Criar story</TitleStory>
                </FooterCard>
            </StoryCard>

            <StoryCard>
                <UserStory>
                    <UserImageContainer />
                </UserStory>

                <FooterCard FillBg='#0000'>
                    <TitleStory textAlign="left" color="#fff">Criar story</TitleStory>
                </FooterCard>
            </StoryCard>
        </StoryContainer>
    )
}

export default StoreAreaComponent