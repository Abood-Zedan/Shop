import React from 'react'
import lineImg from '../../../assets/images/header/line.png'
import mainImg from '../../../assets/images/header/feature-product-4.png'
import Button from 'react-bootstrap/Button';
import backImg from '../../../assets/images/header/hero-one-shape.png'
import style from './header.module.css';

export default function Header() {
    return (
        <>
            <section className={`${style.header} d-flex vh-100 justify-content-center align-items-center`}>
                <div className={`${style.text} w-50`}>
                    <div>
                        <span className='fs-4 main-color'>Best for your categories</span>
                        <h1>Exclusive Collection in <span>Our Online</span> Store</h1>
                    </div>
                    <div>
                        <p>Discover our exclusive collection available only in our online store. Shop now for unique and premium items that you won't find anywhere else.</p>
                        <div className='d-flex gap-4 align-items-center'>
                            <div className={`${style.textBox} d-flex d-flex align-items-center gap-2`}>
                                <div className={`${style.currency}`}>$</div>
                                <div className={`${style}`}>
                                    <span className='fs-5'>Discount Price</span>
                                    <h3 className='m-0 fs-1'>140.00</h3>
                                </div>
                            </div>
                            <div className={`${style.line}`}>
                                <img src={lineImg} alt="" className='w-100' />
                            </div>
                            <Button className=''>Shop Now</Button>
                        </div>
                    </div>
                </div>
                <div className={`${style.img} w-50 d-flex justify-content-center align-items-center position-relative`}>
                    <img src={mainImg} alt="" className={`${style.mainImg}`} />
                    <img src={backImg} alt="" className={`${style.backImg}`} />
                </div>
            </section>
        </>
    )
}
