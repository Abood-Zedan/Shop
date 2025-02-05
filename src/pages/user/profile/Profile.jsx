import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomSidebar from '../../../components/user/sidebar/CustomSidebar'
import { Col, Row } from 'react-bootstrap'

export default function Profile() {
    return (
        <>
            <Row className={`gap-3`}>
                <Col md={2}>
                    <CustomSidebar />
                </Col>
                <Col md={9}>
                    <Outlet />
                </Col>
            </Row>
        </>
    )
}
