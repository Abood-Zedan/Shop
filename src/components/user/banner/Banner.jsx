import React from 'react'
import banner1 from '../../../assets/images/banner/banner-1.png'
import line from '../../../assets/images/banner/line.png'
import discount from '../../../assets/images/banner/discount.png'
import banner2 from '../../../assets/images/banner/banner-2.png'

import style from './banner.module.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Banner() {
    return (
        <>
            <section className={`${style.banner} px-5`}>
                <Container fluid>
                    <Row className='row-gap-3'>
                        <Col lg={6}>
                            <div className={`${style.item} d-flex`}>
                                <div className="text d-flex flex-column gap-4">
                                    <div className={`${style.discount} d-flex flex-column`}>
                                        <p className='text-color m-0'>up to</p>
                                        <span>50%</span>
                                    </div>
                                    <h4 className='text-color'>Exclusive Kids & Adults Summer Outfits</h4>
                                    <Link to={'/products'}>Shop Now</Link>
                                </div>
                                <img src={discount} alt="" className={`${style.discountImg}`} />
                                <img src={banner1} alt="" className={`${style.bannerImg}`} />
                                <img src={line} alt="" className={`${style.line}`} />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={`${style.item} d-flex`}>
                                <div className="text d-flex flex-column gap-4">
                                    <div className={`${style.discount} d-flex flex-column`}>
                                        <p className='text-color m-0'>up to</p>
                                        <span>70%</span>
                                    </div>
                                    <h4 className='text-color'>Exclusive Kids & Adults Summer Outfits</h4>
                                    <Link to={'/products'}>Shop Now</Link>
                                </div>
                                <img src={discount} alt="" className={`${style.discountImg}`} />
                                <img src={banner2} alt="" className={`${style.bannerImg}`} />
                                <img src={line} alt="" className={`${style.line}`} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
