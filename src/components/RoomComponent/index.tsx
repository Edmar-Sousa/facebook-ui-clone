import { useState } from 'react'

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'


import {
    Container,
    RoomContainer,
    CreateRoomButton,
    UserRoom,
    RoomList,
    ButtonScroll,
} from './styled'

import CameraWithIcon from '../../icons/CameraWithPlusIcon'

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

    /**
     * @description this function return the first elements or null with id received
     * @param id 
     */
    function getRefOfElementFromId(id : string) : HTMLElement | null {
        const arrayOfElements = arrayRefsToElements.map((element : ArrayElementType) => element.id == id ? element.ref : null)
        return arrayOfElements[arrayOfElements.length - 1]
    }


    /**
     * @description this function get a reference of element and 
     * push reference to 'arrayRefsToElements'
     * 
     * @param element<HTMLElement | null>
     */
    function getRefToElement(element : HTMLElement | null) {
        const idElement = element?.getAttribute('id')

        if (typeof idElement === 'string' &&  element != null) {
            const elementToPushInArray : ArrayElementType = {
                id : idElement,
                ref: element
            }

            arrayRefsToElements.push(elementToPushInArray)
        }
    }


    /**
     * @description this function recive an element with scroll and 
     * show or hidden buttons to apply scroll
     * 
     * @param element<HTMLElement> 
     */
    function hiddenOrShowButtons(element : HTMLElement) {
        const maxScrollToHiddenButton = element.scrollWidth - element.clientWidth

        if (element.scrollLeft <= 0)
            setShowOrHiddenButtons({ leftButton: false, rightButton: true })
        
        else if (element.scrollLeft >= maxScrollToHiddenButton)
            setShowOrHiddenButtons({ leftButton: true, rightButton: false })
        
        else 
            setShowOrHiddenButtons({ leftButton: true, rightButton: true })
    }


    /**
     * @description this function is call when the user click in right or left button,
     *  then a function determine the a direction of scroll and apply scroll. 
     *  And finally call the function showOrHiddenButtons.
     * 
     * @param event<React.MouseEvent>
     */
    function applyScrollTo(event : React.MouseEvent) {
        const htmlElement = event.target as HTMLElement
        const idElement   = htmlElement.getAttribute('id')

        const VALUE_TO_APLLY_IN_SCROLL = 300

        if (idElement != null){ 
            const scrollXValue = idElement === 'rightButton' ? VALUE_TO_APLLY_IN_SCROLL : -VALUE_TO_APLLY_IN_SCROLL
            const refToContainerScroll = getRefOfElementFromId('roomContainer')

            if (refToContainerScroll != null) {
                const maxScrollX = refToContainerScroll?.scrollWidth - refToContainerScroll?.clientWidth

                let valueToApplyInScroll = scrollValue + scrollXValue
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
                onClick={ applyScrollTo } ref={ getRefToElement } >
                    <AiOutlineRight fontSize={20} pointerEvents="none" />
            </ButtonScroll>
        )
    }

    function buildButtonLeft() {
        return (
            <ButtonScroll 
                left="10px" 
                id="leftButton"
                onClick={ applyScrollTo } ref={ getRefToElement }>
                    <AiOutlineLeft fontSize={20} pointerEvents="none" />
            </ButtonScroll>
        )
    }

    return (
        <Container>
            { showOrHiddenButtons?.rightButton ? buildButtonRight() : null }
            { showOrHiddenButtons?.leftButton  ? buildButtonLeft()  : null }
            

            <RoomContainer ref={ getRefToElement } id="roomContainer">
                <CreateRoomButton>
                    <CameraWithIcon size="20px" /> Criar sala
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
