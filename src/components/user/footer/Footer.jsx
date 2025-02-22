import React from 'react'
import star from '../../../assets/images/footer/star.svg'
import recentPost_1 from '../../../assets/images/footer/recent-post-1.png'
import recentPost_2 from '../../../assets/images/footer/recent-post-2.png'
import recentPost_3 from '../../../assets/images/footer/recent-post-3.png'
import shape from '../../../assets/images/footer/shape.png'
import { Link } from 'react-router-dom'
import style from './footer.module.css'
import { Col, Container, Row } from 'react-bootstrap'
export default function Footer() {
    return (
        <>
            <footer>
                <Container fluid>
                    <Row className="row-gap-3">
                        <Col lg={3} md={6} sm={12} className="d-flex flex-column gap-1">
                            <h3 className='fw-bold title'>Zedan-Shop</h3>
                            <p className='text-color'>Zedan is an exciting International brand we provide high quality cloths</p>
                            <div className={`${style.email} d-flex align-items-center gap-1`}>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:abood7tt@gmail.com" className='text-decoration-none text-color'>info@zedan-shop.com</a>
                            </div>
                            <div className={`${style.phone} d-flex align-items-center gap-1`}>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+970592663711" className='text-decoration-none text-color'>+970 592 663 711</a>
                            </div>
                            <div className={`${style.social_media}`}>
                                <span className='fw-medium fs-5'>Find US:</span>
                                <a href="#"><i className="fa-brands fa-facebook-f fs-5"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram fs-5"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in fs-5"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter fs-5"></i></a>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={`${style.customer_services} d-flex flex-column gap-2`}>
                            <h3 className='fs-4'>Customer Services</h3>
                            <div>
                                <img src={star} alt="" />
                                <a href="">Collections & Delivery</a>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <a href="">Returns & Refunds</a>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <a href="">Terms & Conditions</a>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <a href="">Delivery Return</a>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <a href="">Store Locations</a>
                            </div>
                            <div className={`${style.shape}`}>
                            <img src={shape} alt="" className='' />
                        </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={` ${style.quick_link} d-flex flex-column gap-2`}>
                            <h3 className='fs-4'>Quick Link</h3>
                            <div>
                                <img src={star} alt="" />
                                <a href="">Privacy Policy</a>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <a href="">Terms Of Use</a>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <a href="">FAQ</a>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <a href="">Contact</a>
                            </div>
                            <div>
                                <img src={star} alt="" />
                                <Link to={'/auth/login'}>Login / Register</Link>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={` ${style.recent_post} d-flex flex-column gap-2`}>
                            <h3>Recent Post</h3>
                            <div className='d-flex gap-3'>
                                <div><img src={recentPost_1} alt="" /></div>
                                <div className='d-flex flex-column gap-1'>
                                    <a href='#'>Tips on Finding Affordable Fashion Gems Online</a>
                                    <span>July 11, 2023</span>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div><img src={recentPost_2} alt="" /></div>
                                <div className='d-flex flex-column gap-1'>
                                    <a href='#'>Mastering the Art of Fashion E-commerce Marketing</a>
                                    <span>July 20, 2022</span>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div><img src={recentPost_3} alt="" /></div>
                                <div className='d-flex flex-column gap-1'>
                                    <a href='#'>Must-Have Trends You Can Shop Online Now</a>
                                    <span>July 13, 2024</span>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </footer>
        </>
    )
}
