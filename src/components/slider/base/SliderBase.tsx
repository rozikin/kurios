import React, { LegacyRef, MutableRefObject, useEffect, useRef, useState } from 'react'
import './SliderBase.scss'


interface SliderBaseProps{
    image?: string,
    showRef?: MutableRefObject<(() => void) | null>,
    hideRef?: MutableRefObject<(() => void) | null>,
    onTransitionEndRef?: (isShowing: boolean) => void
}

function SliderBase({image, showRef, hideRef, onTransitionEndRef}: SliderBaseProps) {
    const [show, setShow] = useState<boolean>(false)
    const baseRef: LegacyRef<HTMLDivElement> = useRef(null)
    const overlayRef: LegacyRef<HTMLDivElement> = useRef(null)

    useEffect(() =>{
 
        if(showRef !== undefined){
            showRef.current = () =>{
                setShow(true)
            }
        }

        if(hideRef !== undefined){
            hideRef.current =() =>{
                setShow(false)
            }
        }

    }, [showRef, hideRef, onTransitionEndRef])


    return (
        <div ref={baseRef} className={`slider-base ${show ? '' : 'move-down'}`}>
            <img className="slider-base-bg"  alt='' src={image}/>
            <div  className={`slider-base-container ${show ?'move-down' :''}`}>
            <img className='slider-base-container-bg' alt='' src={image}/>
            <div className='slider-base-container-overlay' />

            </div>
            <div ref={overlayRef} className={`slider-base-overlay ${show ? 'invisible' :'' }`} />
        </div>
    )
}

export default SliderBase
