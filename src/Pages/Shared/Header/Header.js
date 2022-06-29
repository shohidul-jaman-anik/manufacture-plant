import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../Hook/useAdmin/useAdmin';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    return (
        <Navbar className='navStyle' collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'  >
            <Container >
                <Navbar.Brand as={Link} to='/' href="#home">
                    <img className='header-logo' src="" alt="" />  <span className='header-title'>Manufacture Plant</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link as={Link} to='/myOrder' >My Order</Nav.Link>
                        <Nav.Link as={Link} to='/addReview' >Add Review</Nav.Link>
                        <Nav.Link as={Link} to='/MyProfile' >My Profile</Nav.Link>
                        <Nav.Link as={Link} to='/blog' >Blog</Nav.Link>
                        {admin && <Nav.Link as={Link} to='/dashboard' >Dashboard</Nav.Link>}

                        <NavDropdown title="About Us" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/whyUs'>Why Choose Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        </NavDropdown>
                        <label for="my-drawer-2" class="drawer-button btn btn-primary drawer-button lg:hidden ">Open drawer</label>
                    </Nav>
                    <Nav>

                        {user ? (
                            <div className='flex items-center '>
                                <button
                                    className="btn btn-link text-white text-decoration-none"
                                    onClick={logout}
                                >
                                    Sign Out
                                </button>
                                <img className='h-7 rounded-full' src={user.photoURL} alt="" />
                            </div>
                        ) : (
                            <Nav.Link as={Link} to="/signUp">
                                Sign In
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;