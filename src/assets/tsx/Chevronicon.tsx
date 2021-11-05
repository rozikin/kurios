import React from 'react'
import { IconProps } from '../../properties/property'

function ChevronIcon({className, onClick, width, height}: IconProps) {
    return (
        <div style={{position: 'relative', display:'flex', justifyContent:'center', alignItems:'center', width: width, height: height}} onClick={onClick}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
            </svg>

        </div>
    )
}

export default ChevronIcon
