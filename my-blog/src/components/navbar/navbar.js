import  React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const NavBar = () => {

    return (
        <React.Fragment>
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" >
                <Navbar.Brand href="/" > POST REDDIT </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Forms" id="collasible-nav-dropdown" >
                            <NavDropdown.Item href="/create/post">New</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/edit">Edit</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                     
                </Navbar.Collapse>
            </Navbar>
            <div>
              
            </div>
        </React.Fragment>
    );
}
export default NavBar
