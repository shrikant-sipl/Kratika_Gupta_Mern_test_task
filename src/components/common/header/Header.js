import React, { Fragment } from "react";
import { Container, Navbar, Dropdown } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { toastr } from 'react-redux-toastr'
import { logout } from '../../../actions';

const Header = () => {

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const handleLogout = () => {
		dispatch(logout())
        toastr.success('Success','Successfully Logout.')
		window.location.assign('/')
	}

    return (
        <header id="header">
            <Navbar>
                <Container fluid>
                    {auth.isLoggedIn && 
                    <Fragment>
                        <Navbar.Brand as={Link} to="/">
                        <img src={require('../../../assets/images/logo.jpg').default} alt="MERN" width={200} height={70} />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <div className="header-right justify-content-end align-items-end d-flex flex-column">
                            <div className="header-user-menu">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic" className="header-user-icon">
                                        <img src={require('../../../assets/images/icons/user-icon.png').default} alt="user-icon" />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu align="end">
                                        <Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Fragment>
                    }
                </Container>
            </Navbar>
        </header>
    )
}

export default Header