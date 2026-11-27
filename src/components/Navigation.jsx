import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

// De navbar staat bovenaan op elke pagina
function Navigation() {
    return (
        <Navbar expand="md" bg="white" className="border-bottom" sticky="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold text-primary">
                    Florian
                </Navbar.Brand>

                {/* Hamburgermenu op kleine schermen */}
                <Navbar.Toggle aria-controls="hoofdmenu" />

                <Navbar.Collapse id="hoofdmenu">
                    {/* NavLink geeft de actieve pagina automatisch de class "active" */}
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/projecten">Projecten</Nav.Link>
                        <Nav.Link as={NavLink} to="/opleiding-werk">Opleiding & werk</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation