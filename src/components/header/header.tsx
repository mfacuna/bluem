import * as React from 'react';
import Styles from './headerStyles';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import ROUTES from './../../router/routes';

interface IProps {
    tittle: string
}

const Header = (props: IProps) => {

    const { tittle } = props

    return (
        <>
            <Container fluid style={Styles.container}>
                <Navbar style={Styles.navbarbrand}>
                            <Navbar.Brand href="/">
                                {tittle}
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                                <Nav>
                                    {
                                        ROUTES.map((route: any, index: number) => (
                                            <Nav.Link href={route.path} key={index}>{route.menu}</Nav.Link>
                                        ))
                                    }
                                </Nav>
                            </Navbar.Collapse>
                </Navbar>
            </Container >
        </>
        /*             
                <div style={Styles.container} className="container-fluid">
        <Row className="justify-content-lg-center justify-content-md-start p-3" >
                    <Navbar className="justify-content-center" style={Styles.navbarbrand}>
                            <Navbar.Brand className="justify-content-center" style={Styles.brand} href="/">{tittle}</Navbar.Brand>
                    </Navbar>
                    </Row>
        
                    <Row className="justify-content-lg-center justify-content-md-end p-3">
                    <Navbar expand="lg" style={Styles.navbar}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav >
                                    {
                                        ROUTES.map((route: any, index: number) => (
                                            <Nav.Link style={Styles.nav} href={route.path} key={index}>{route.menu}</Nav.Link>
                                        ))
                                    }
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                    </Row>
                    
        
                </div> */

    )
}

export default Header