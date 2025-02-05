import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function CustomSidebar() {
    return (
        <>
            <Sidebar className={`vh-100`}>
                <Menu
                    menuItemStyles={{
                        button: {
                            // the active class will be added automatically by react router
                            // so we can use it to style the active menu item
                            [`&.active`]: {
                                backgroundColor: '#13395e',
                                color: '#b6c8d9',
                            },
                        },
                    }}
                >
                    <MenuItem component={<Link to="userInfo" />}> userInfo</MenuItem>
                    <MenuItem component={<Link to="orders" />}> Orders</MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}
