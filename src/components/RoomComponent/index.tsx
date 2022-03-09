import { useState } from 'react'

import { HiVideoCamera } from 'react-icons/hi'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'


import {
    Container,
    RoomContainer,
    CreateRoomButton,
    UserRoom,
    RoomList,
    ButtonScroll,
} from './styled'

interface ArrayElementType {
    id  : string
    ref : HTMLElement
}

interface showOrHiddenButtonsType {
    leftButton : boolean
    rightButton: boolean
}

const RoomComponent = () => {
    let arrayRefsToElements = Array<ArrayElementType>()

    const [scrollValue, setScrollValue] = useState<number>(0)
    const [showOrHiddenButtons, setShowOrHiddenButtons] = useState<showOrHiddenButtonsType>({ leftButton:false, rightButton:true })

    function getRefOfElementFromId(id : string) : (HTMLElement | null)[] {
        return arrayRefsToElements.map((element : ArrayElementType) => element.id == id ? element.ref : null)
    }


    function getRefToContainerElement(element : HTMLElement | null) {
        const idElement = element?.getAttribute('id')

        if (typeof idElement === 'string' &&  element != null) {
            const elementToPushInArray : ArrayElementType = {
                id : idElement,
                ref: element
            }

            arrayRefsToElements.push(elementToPushInArray)
        }
    }


    function hiddenOrShowButtons(element : HTMLElement) {
        if (element.scrollLeft <= 0)
            setShowOrHiddenButtons({ leftButton: false, rightButton: true })
            
        else if (element.scrollLeft >= (element.scrollWidth - element.clientWidth))
            setShowOrHiddenButtons({ leftButton: true, rightButton: false })
        
        else 
            setShowOrHiddenButtons({ leftButton: true, rightButton: true })
    }


    function applyScrollTo(event : React.MouseEvent) {
        const htmlElement = event.target as HTMLElement
        const idElement   = htmlElement.getAttribute('id')

        if (idElement != null){ 
            const scrollXValue = idElement === 'rightButton' ? 300 : -300
            let valueToApplyInScroll = scrollValue + scrollXValue
            const arrayElements = getRefOfElementFromId('roomContainer')

            const refToContainerScroll = arrayElements[arrayElements.length - 1]

            if (refToContainerScroll != null) {
                const maxScrollX = refToContainerScroll?.scrollWidth - refToContainerScroll?.clientWidth

                if (valueToApplyInScroll <= 0)
                    valueToApplyInScroll = 0
                
                else if (valueToApplyInScroll >= maxScrollX)
                    valueToApplyInScroll = maxScrollX
                

                setScrollValue(valueToApplyInScroll)
                refToContainerScroll?.scroll(valueToApplyInScroll, 0)

                hiddenOrShowButtons(refToContainerScroll)
            }

        }
    }


    function buildButtonRight() {
        return (
            <ButtonScroll 
                right="10px" 
                id="rightButton"
                onClick={ applyScrollTo } ref={ getRefToContainerElement }
            >
                <AiOutlineRight fontSize={20} pointerEvents="none" />
            </ButtonScroll>
        )
    }

    function buildButtonLeft() {
        return (
            <ButtonScroll 
                left="10px" 
                id="leftButton"
                onClick={ applyScrollTo } ref={ getRefToContainerElement }
            >
                <AiOutlineLeft fontSize={20} pointerEvents="none" />
            </ButtonScroll>
        )
    }

    return (
        <Container>
            { showOrHiddenButtons?.rightButton ? buildButtonRight() : null }
            { showOrHiddenButtons?.leftButton  ? buildButtonLeft()  : null }
            

            <RoomContainer ref={ getRefToContainerElement } id="roomContainer">
                <CreateRoomButton>
                    <HiVideoCamera fontSize={25} color="#ea465f" /> Criar sala
                </CreateRoomButton>

                <RoomList>
                    <li><UserRoom /></li>
                    <li><UserRoom /></li>
                    <li><UserRoom /></li>
                    <li><UserRoom /></li>
                    <li><UserRoom /></li>
                    <li><UserRoom /></li>
                    <li><UserRoom /></li>
                    <li><UserRoom /></li>
                    <li><UserRoom /></li>
                    <li><UserRoom /></li>
                    <li><UserRoom /></li>
                </RoomList>
            </RoomContainer>
        </Container>
    )
}

export default RoomComponent
