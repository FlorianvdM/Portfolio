import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

// Mijn introductietekst. Pas deze aan zodat hij klinkt zoals ik praat.
const introTekst =
    'Ik ben 2e jaars student Software Developer (niveau 4) aan MBO Utrecht. Ik vind het leuk om websites en webapplicaties te bouwen, van wat je op het scherm ziet tot de database erachter. Op deze site laat ik zien waar ik aan gewerkt heb en wat ik kan.'

function Home() {
    // Maakt automatisch een zin met alle projectnamen uit projects.js
    const projectNamen = projects.map((project) => project.titel).join(', ')

    return (
        <Container className="py-5">
            {/* Intro met tekst links en foto/initialen rechts */}
            <Row className="align-items-center g-4 mb-5">
                <Col md={8}>
                    <h1 className="display-5 fw-bold">Hallo, ik ben Florian</h1>
                    <p className="lead">{introTekst}</p>
                    <p>Ik heb onder andere gewerkt aan {projectNamen}.</p>

                    <Button as={Link} to="/projecten" variant="primary" className="me-2">
                        Bekijk mijn projecten
                    </Button>
                    <Button as={Link} to="/contact" variant="outline-primary">
                        Neem contact op
                    </Button>
                </Col>

                <Col md={4} className="text-center">
                    {/* Rondje met initialen. Later te vervangen door een <img> met een foto. */}
                    <div
                        className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center display-4"
                        style={{ width: 200, height: 200 }}
                    >
                        FM
                    </div>
                </Col>
            </Row>

            {/* Mijn skills */}
            <section className="mb-5">
                <h2 className="h4 mb-3">Waar ik mee werk</h2>
                <Skills />
            </section>

            {/* Uitgelichte projecten: de eerste 3 uit projects.js */}
            <section>
                <h2 className="h4 mb-3">Recente projecten</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {projects.slice(0, 3).map((project) => (
                        <Col key={project.slug}>
                            <ProjectCard project={project} />
                        </Col>
                    ))}
                </Row>
            </section>
        </Container>
    )
}

export default Home