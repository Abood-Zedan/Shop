import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GiFireflake } from "react-icons/gi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbHeartHandshake } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";

import style from './workProcessing.module.css'

export default function WorkProcessing() {
    return (
        <>
            <section className='my-5'>
                <Container fluid className={`px-5`}>
                    <div className={`${style.text} d-flex flex-column align-items-center justify-content-center gap-2 mb-5`}>
                        <span><GiFireflake /> <span className={`main-color fw-semibold`}>Work Processing</span> <GiFireflake /></span>
                        <h3 className={`fs-2 fw-bold`}>How it Work processing</h3>
                    </div>
                    <Row>
                        <Col md={3}>
                            <div className={`${style.content} d-flex flex-column gap-2 bg-white`}>
                                <div className={`icon fs-1`}>
                                    <AiOutlineFileSearch />
                                </div>
                                <div className={`info`}>
                                    <h4>Browsing & Choosing</h4>
                                    <p className={`text-color`}>This is where customers visit your online store, browse your products.</p>
                                </div>
                                <div className={`${style.number}`}>01</div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className={`${style.content} d-flex flex-column gap-2 bg-white`}>
                                <div className={`icon fs-1`}>
                                    <GiTakeMyMoney />
                                </div>
                                <div className={`info`}>
                                    <h4>Browsing & Choosing</h4>
                                    <p className={`text-color`}>This is where customers visit your online store, browse your products.</p>
                                </div>
                                <div className={`${style.number}`}>01</div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className={`${style.content} d-flex flex-column gap-2 bg-white`}>
                                <div className={`icon fs-1`}>
                                    <TbHeartHandshake />
                                </div>
                                <div className={`info`}>
                                    <h4>Browsing & Choosing</h4>
                                    <p className={`text-color`}>This is where customers visit your online store, browse your products.</p>
                                </div>
                                <div className={`${style.number}`}>01</div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className={`${style.content} d-flex flex-column gap-2 bg-white`}>
                                <div className={`icon fs-1`}>
                                    <TbTruckDelivery />
                                </div>
                                <div className={`info`}>
                                    <h4>Browsing & Choosing</h4>
                                    <p className={`text-color`}>This is where customers visit your online store, browse your products.</p>
                                </div>
                                <div className={`${style.number}`}>01</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
