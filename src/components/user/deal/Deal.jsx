import React from 'react'
import { MdDiscount } from "react-icons/md";
import mainImg from '../../../assets/images/deal/deal.png'

import style from './deal.module.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Deal() {
    return (
        <>
            <section className={`${style.deal} mb-5`}>
                <Container fluid className='px-5'>
                    <div className={`${style.itme}`}>
                        <div className={`${style.text}`}>
                            <span className={`text-color fs-5 ${style.span}`}><MdDiscount className='darkColor'/> Deal of the Week</span>
                            <h2>Hurry Up! Offer ends in. Get</h2>
                            <p>UP TO 80% OFF</p>
                            <div className={`${style.countDown} d-flex align-items-center gap-3`}>
                                <div className='d-flex flex-column align-items-center'>
                                    0
                                    <span>Days</span>
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    0
                                    <span>Hours</span>
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    0
                                    <span>Minutes</span>
                                </div>
                                <div className='d-flex flex-column align-items-center'>
                                    0
                                    <span>Seconds</span>
                                </div>
                            </div>
                            <Link>Shop Now</Link>
                        </div>
                        <div className={`${style.img}`}>
                            <img src={mainImg} alt="" className='w-100' />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
