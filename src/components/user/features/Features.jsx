import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaTruckFast } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

import style from './features.module.css'

export default function Features() {
    return (
        <>
            <section className={`my-5`}>
                <Container fluid className={`px-5`}>
                    <Row className={`${style.row}`}>
                        <Col lg={3} md={6} sm={12} className={`${style.border} ${style.nonBorderSm}`}>
                            <div className={`d-flex gap-2 px-3 align-items-center`}>
                                <div className={`${style.icon}`}>
                                    <FaTruckFast />
                                </div>
                                <div className={`${style.info}`}>
                                    <h3>Free Shipping</h3>
                                    <p>You get your items delivered without any extra cost.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={`${style.border} ${style.nonBorderMd}`}>
                            <div className={`d-flex gap-2 px-3 align-items-center`}>
                                <div className={`${style.icon}`}>
                                    <FaMicrophone />
                                </div>
                                <div className={`${style.info}`}>
                                    <h3>Great Support 24/7</h3>
                                    <p>Our customer support team is available around the clock</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12} className={`${style.border} ${style.nonBorderSm}`}>
                            <div className={`d-flex gap-2 px-3 align-items-center`}>
                                <div className={`${style.icon}`}>
                                    <FaRegHandshake />
                                </div>
                                <div className={`${style.info}`}>
                                    <h3>Return Available</h3>
                                    <p>Making it easy to return any items if you're not satisfied.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className={`d-flex gap-2 px-3 align-items-center`}>
                                <div className={`${style.icon}`}>
                                    <FaSackDollar />
                                </div>
                                <div className={`${style.info}`}>
                                    <h3>Secure Payment</h3>
                                    <p>Shop with confidence knowing that our secure payment</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
