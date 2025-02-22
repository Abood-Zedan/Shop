import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

export default function Rating({data}) {

    let full = parseInt(data)
    let half = parseFloat(data % 1)
    if (half > 0) {
        half = 1;
    } else {
        half = 0;
    }

    return (
        <>
            {
                Array.from({ length: full }, (_, i) => (
                    <FaStar key={i}  style={ {color: '#F7941F' }} />
                ))
            }
            {
                Array.from({ length: half }, (_, i) => (
                    <FaRegStarHalfStroke key={i} style={ {color: '#F7941F' }} />
                ))
            }
        </>
    )
}
