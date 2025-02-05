import React from 'react'
import curved from '../../../assets/images/head-page/curved-arrow.png'
import stars from '../../../assets/images/head-page/stars.png'
import style from './headOfPage.module.css'

export default function HeadOfPage({title,page}) {
    return (
        <>
            <div className={`${style.head}`}>
                <div>
                    <h1 className='ms-5 mb-5 fw-bold'>{title}</h1>
                    <p className='fs-5 ms-5'><span className='main-color'>Home</span>  <i className="fa-solid fa-arrow-right-long fs-6"></i>  {page}</p>
                </div>
                <img src={curved} alt="" className={`${style.cruved}`} />
                <img src={stars} alt="" className={`${style.stars}`} />
            </div>
        </>
    )
}
