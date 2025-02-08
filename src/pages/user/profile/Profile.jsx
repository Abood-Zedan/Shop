import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomSidebar from '../../../components/user/sidebar/CustomSidebar'
import { Col, Row } from 'react-bootstrap'

export default function Profile() {
    return (
        <>
            <Row className={``}>
                <Col md={2}>
                    <CustomSidebar />
                </Col>
                <Col md={10}>
                    <Outlet />
                </Col>
            </Row>
        </>
    )
}
