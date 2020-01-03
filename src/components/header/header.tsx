import * as React from 'react';
import Styles from './headerStyles';
import { Navbar, Nav } from 'react-bootstrap';
import ROUTES from './../../router/routes';

interface IProps {
    tittle: string
}

const Header = (props: IProps) => {

    const { tittle } = props

    return (
        <div style={Styles.container} className="container">
            <Navbar expand="lg" style={Styles.navbar}>
                <Navbar.Brand style={Styles.brand} href="#home">{tittle}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        {
                            ROUTES.map((route: any, index: number) => (
                                <Nav.Link href={route.path} key={index}>{route.menu}</Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header