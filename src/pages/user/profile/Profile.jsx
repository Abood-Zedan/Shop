import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomSidebar from '../../../components/user/sidebar/CustomSidebar'
import { Col, Container, Row } from 'react-bootstrap'

import style from './profile.module.css'

export default function Profile() {
    return (
        <>
            <Container fluid className='ps-0'>
                <Row className={`${style.row}`}>
                    <Col md={2} className={`${style.col}`}>
                        <CustomSidebar />
                    </Col>
                    <Col md={10}>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
