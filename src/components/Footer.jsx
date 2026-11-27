import { Container } from 'react-bootstrap'

// De footer staat onderaan op elke pagina
function Footer() {
    // Het jaartal wordt automatisch het huidige jaar
    const jaar = new Date().getFullYear()

    return (
        <footer className="border-top py-3 mt-5">
            <Container className="d-flex justify-content-between small text-muted">
                <span>© {jaar} Florian van der Meulen</span>
                <span>
                    <a href="https://github.com/FlorianvdM" target="_blank" rel="noreferrer" className="me-3">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/florian-van-der-meulen-aa84743a6" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                </span>
            </Container>
        </footer>
    )
}

export default Footer