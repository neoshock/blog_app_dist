import './Header.css'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Aplicaciones Distribuidas</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="inicio">Inicio</Nav.Link>
                        <Nav.Link href="blogs">Blogs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header