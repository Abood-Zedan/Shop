import React from 'react'
import HeadOfPage from '../../../components/user/headOfPage/HeadOfPage'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import textImg from '../../../assets/images/contact/text-img.png'


import style from './contact.module.css'

export default function Contact() {
    return (
        <>
            <section className='info'>
                <HeadOfPage title='Contact' page='Contact' />
                <Container fluid className='px-5 d-flex flex-column gap-5'>
                    <div className={`${style.teamInfo}`}>
                        <div className={`${style.infoItem} d-flex justify-content-between`}>
                            <div className={`${style.location} w-25`}>
                                <h3>Australia Office:</h3>
                                <p>Apt. 695 763 Cartwright Villages, East Deanland, MI 69269, Australia</p>
                            </div>
                            <div className={`${style.phone} d-flex flex-column gap-2`}>
                                <h3>Phone</h3>
                                <a href="#">+01 123 456 7890</a>
                                <a href="#">+01 123 456 6482</a>
                            </div>
                            <div className={`${style.email}`}>
                                <h3>Email</h3>
                                <a href="#">help@domain.com</a>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.teamInfo}`}>
                        <div className={`${style.infoItem} d-flex justify-content-between`}>
                            <div className={`${style.location} w-25`}>
                                <h3>England Office:</h3>
                                <p>69093 Bahringer Square, Gradytown, KY 62192 Florida, United States</p>
                            </div>
                            <div className={`${style.phone} d-flex flex-column gap-2`}>
                                <h3>Phone</h3>
                                <a href="#">+01 123 321 1290</a>
                                <a href="#">+01 123 321 6931</a>
                            </div>
                            <div className={`${style.email}`}>
                                <h3>Email</h3>
                                <a href="#">help@domain.com</a>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.teamInfo}`}>
                        <div className={`${style.infoItem} d-flex justify-content-between`}>
                            <div className={`${style.location} w-25`}>
                                <h3>Canada Office:</h3>
                                <p>931 Carroll Squares, North Mireya, VA 48458, Ontario Canada</p>
                            </div>
                            <div className={`${style.phone} d-flex flex-column gap-2`}>
                                <h3>Phone</h3>
                                <a href="#">+01 123 528 7675</a>
                                <a href="#">+01 123 528 1282</a>
                            </div>
                            <div className={`${style.email}`}>
                                <h3>Email</h3>
                                <a href="#">help@domain.com</a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className={`${style.contact}`}>
                <Container>
                    <Row className='justify-content-between'>
                        <Col md={8} className='bg-white p-5'>
                            <h2 className='fs-1 mb-5'>Get in touch</h2>
                            <Form className={`d-flex flex-column gap-4`}>
                                <div className={`${style.userInfo} d-flex justify-content-between`}>
                                    <Form.Group controlId="formBasicEmail" className={`${style.input}`}>
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail" className={`${style.input}`}>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                </div>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control as={'textarea'} placeholder="Write Reviews" style={{ height: '230px' }} />
                                </Form.Group>
                                <Button type="submit" className={`btn ${style.submitButton}`}>Send Message</Button>
                            </Form>
                        </Col>
                        <Col md={3}>
                            <img src={textImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
