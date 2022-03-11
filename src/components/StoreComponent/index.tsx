
import { BsPlusCircleFill, BsArrowRight } from 'react-icons/bs'

import {
    StoryContainer,
    StoryCard,
    FooterCard,
    AddStoryPlusBtn,
    TitleStory,
    UserStory,
    UserImageContainer,
} from './style'

const StoreAreaComponent = () => {
    return (
        <StoryContainer>
            <span>
                <StoryCard>
                    <FooterCard>
                        <AddStoryPlusBtn>
                            <BsPlusCircleFill fontSize={34} color="#1c75eb" />
                        </AddStoryPlusBtn>

                        <TitleStory textAlign="center">Criar story</TitleStory>
                    </FooterCard>
                </StoryCard>
            </span>

            <span>
                <StoryCard>
                    <UserStory>
                        <UserImageContainer />
                    </UserStory>

                    <FooterCard FillBg='#0000'>
                        <TitleStory textAlign="left" color="#fff">Criar story</TitleStory>
                    </FooterCard>
                </StoryCard>
            </span>

            <span>
                <StoryCard>
                    <UserStory>
                        <UserImageContainer />
                    </UserStory>

                    <FooterCard FillBg='#0000'>
                        <TitleStory textAlign="left" color="#fff">Criar story</TitleStory>
                    </FooterCard>
                </StoryCard>
            </span>

            <span>
                <StoryCard>
                    <UserStory>
                        <UserImageContainer />
                    </UserStory>

                    <FooterCard FillBg='#0000'>
                        <TitleStory textAlign="left" color="#fff">Criar story</TitleStory>
                    </FooterCard>
                </StoryCard>
            </span>

            <span>
                <StoryCard>
                    <UserStory>
                        <UserImageContainer />
                    </UserStory>

                    <FooterCard FillBg='#0000'>
                        <TitleStory textAlign="left" color="#fff">Criar story</TitleStory>
                    </FooterCard>
                </StoryCard>
            </span>
        </StoryContainer>
    )
}

export default StoreAreaComponent