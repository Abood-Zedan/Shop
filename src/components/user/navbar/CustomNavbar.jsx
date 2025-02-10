import { Dropdown, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import style from './customNavbar.module.css';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
export default function CustomNavbar() {

    const { cartCount } = useContext(CartContext);
    const token = localStorage.getItem('userToken');
    const navigat = useNavigate();

    const userLogin = () => {
        navigat('/auth/login')
    }
    const userLogout = () => {
        localStorage.removeItem('userToken');
        navigat('/auth/login')
    }

    return (
        <>
            <Navbar expand="lg" className={`${style.userNavbar}`}>
                <Container>
                    <Navbar.Brand as={Link} to={'/'} className='fw-bolder fs-3 title' >Zedan-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={`${style.text} mx-auto`}>
                            <NavDropdown title="Shop" id="basic-nav-dropdown" className='fw-semibold'>
                                <NavDropdown.Item as={Link} to={'/products'} className='fw-medium'>shops-grid</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/categories'} className='fw-medium'>Categories</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/cart'} className='fw-medium'>Cart</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4" className='fw-medium'>Wishlist</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={'/Login'} className='fw-semibold'>Blog</Nav.Link>
                            <Nav.Link as={Link} to={'/Login'} className='fw-semibold'>About As</Nav.Link>
                            <Nav.Link as={Link} to={'/contact'} className='fw-semibold'>Contact</Nav.Link>
                            <Nav.Link as={Link} to={'/auth/Login'} className='fw-semibold'>Login</Nav.Link>
                        </Nav>
                        <Nav className='gap-4 align-items-center'>
                            <div className={`${style.deals} fs-5`}>
                                <i className="fa-solid fa-fire" /> Deal
                            </div>
                            <div className={`${style.star}`}><i className="fa-solid fa-star"></i></div>
                            <div className='Wishlist fs-5'><i className="fa-regular fa-heart"></i></div>
                            <div className={`${style.star}`}><i className="fa-solid fa-star"></i></div>
                            <div className={`${style.cart} fs-5 position-relative`}>
                                <i className="fa-solid fa-bag-shopping"></i>
                                <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                    {cartCount}
                                </span>
                            </div>
                            <div className={`${style.star}`}><i className="fa-solid fa-star"></i></div>
                            <Dropdown className={`${style.profile}`}>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <i className="fa-solid fa-user"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className={`${style.dropdown_menu}`}>
                                        <Dropdown.Item as={Link} to={'profile/userInfo'}>Profile</Dropdown.Item>
                                        <Dropdown.Item onClick={token? ()=>{userLogout()} : ()=>{userLogin()}}  >{token ? 'LogOut': 'Login'}</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
