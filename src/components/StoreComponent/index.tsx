
import { BsPlusCircleFill, BsArrowRight } from 'react-icons/bs'

import {
    StoryContainer,
    StoryCard,
    FooterCard,
    AddStoryPlusBtn,
    TitleStory,
    UserStory,
    UserImageContainer,
    ButtonToViewAllStory
} from './style'

const StoreAreaComponent = () => {
    return (
        <StoryContainer>
            <ButtonToViewAllStory>
                <BsArrowRight fontSize={20} color="#9e9fa1" />
            </ButtonToViewAllStory>

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