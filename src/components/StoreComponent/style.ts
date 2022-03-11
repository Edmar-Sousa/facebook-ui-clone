import styled from 'styled-components'


export const StoryContainer = styled.div`
    width: 80%;
    margin: auto;
    height: 200px;
    position: relative;
    display: flex;
`

export const ButtonToViewAllStory = styled.a`
    width: 40px;
    height: 40px;

    position: absolute;

    z-index: 8;
    right: -7px;
    top: 80px;
    box-shadow: 0 0 5px #9e9fa1ab;

    border-radius: 50%;
    border: 1px solid #9e9fa1;

    text-align: center;
    line-height: 45px;

    background: #ffffff;
`

export const StoryCard = styled.div`
    width: 120px;
    height: 100%;

    border-radius: 10px;
    background: #000;

    margin: 0 5px;

    position: relative;
`

interface FooterCardPropType {
    FillBg ?: string
}

export const FooterCard = styled.div`
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    background: ${(props : FooterCardPropType) => props.FillBg ? props.FillBg : '#fff' };

    &:first-child p {
        margin-left: 0;
    }
`

export const AddStoryPlusBtn = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    top: -20px;
    left: 40px;
    border-radius: 50%;

    background: #fff;
`

interface TitleStoryPropsType {
    textAlign : 'center' | 'left'
    color ?: string
}

export const TitleStory = styled.p`
    font-family: Arial;
    font-size: 11pt;

    font-weight: bold;
    color: ${(props : TitleStoryPropsType) => props.color ? props.color : '#000'};

    text-align: ${(props : TitleStoryPropsType) => props.textAlign};
    margin-top: 20px;

    margin-left: 10px;
`

export const UserStory = styled.div`
    width: 40px;
    height: 40px;

    border-radius: 20px;
    position: absolute;
    top: 10px;
    left: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #1c75eb;
`

export const UserImageContainer = styled.div`
    width: 32px;
    height: 32px;

    border-radius: 20px;
    background: #fff;
`
