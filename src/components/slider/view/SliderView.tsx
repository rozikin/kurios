import React, { MutableRefObject,  useRef } from 'react'
import ChevronIcon from '../../../assets/tsx/Chevronicon'
import SliderBase from '../base/SliderBase'
import './SliderView.scss'
import bg from '../../../assets/images/bg_1.jpg'


function SliderView() {
    const showBeforeRef: MutableRefObject<(() => void) | null> = useRef(null)
    const shoAfterwRef: MutableRefObject<(() => void) | null> = useRef(null)
    const hideBeforeRef: MutableRefObject<(() => void) | null> = useRef(null)
    const hideAfterRef: MutableRefObject<(() => void) | null> = useRef(null)
    const onTransitionEndBeforeRef: MutableRefObject<((isShowing: boolean) => void) | null> = useRef(null)
    const onTransitionEndRefAfterRef: MutableRefObject<((isShowing: boolean) => void) | null> = useRef(null)


    return (
        <div className='slider-view'>
            <div className="slider-view-container">
                <SliderBase image={bg} showRef={showBeforeRef} hideRef={hideBeforeRef}  />
            </div>
            <ChevronIcon className="slider-view-chevron" classContainer='slider-view-chevron-container left' direction='left'/>
            <ChevronIcon className="slider-view-chevron" classContainer='slider-view-chevron-container right' direction= 'right' />
        </div>
    )
}

export default SliderView
