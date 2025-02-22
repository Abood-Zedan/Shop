import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { RiExpandRightLine } from "react-icons/ri";
import { RiContractLeftLine } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
import { SiShopee } from "react-icons/si";


import style from './sidebar.module.css'

export default function CustomSidebar() {

    const [isCollapsed, setISCollapsed] = useState(false);
    const [isUserInfoActive, setIsUserInfoActive] = useState(``);
    const [isOrdersActive, setIsOrdersActive] = useState(``);

    const userInfo = () => {
        setIsUserInfoActive(`active`);
        setIsOrdersActive(``);
    }
    const orders = () => {
        setIsUserInfoActive(``);
        setIsOrdersActive(`active`);
    }

    return (
        <>
            <Sidebar collapsed={isCollapsed} className={`h-100 ${style.sidebar}`}>
                <div className={`d-flex justify-content-end align-items-center`}>
                    <button onClick={() => setISCollapsed(!isCollapsed)}>
                        {isCollapsed ? <RiExpandRightLine /> : <RiContractLeftLine />}
                    </button>
                </div>
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
                    <MenuItem onClick={() => { userInfo() }} component={<Link to="userInfo" />}><div className={isUserInfoActive}><FaRegAddressCard /> UserInfo</div></MenuItem>
                    <MenuItem onClick={() => { orders() }} className={isOrdersActive} component={<Link to="orders" />}><SiShopee /> Orders</MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}
