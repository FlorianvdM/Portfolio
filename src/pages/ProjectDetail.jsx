import { Container, Row, Col, Badge, Card, Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'

// Detailpagina van één project
function ProjectDetail() {
    // De slug uit de URL, bijv. "kitesurfschool"
    const { slug } = useParams()

    // Zoek het project met dezelfde slug in de lijst
    const project = projects.find((p) => p.slug === slug)

    // Bestaat het project niet? Laat dan een melding zien
    if (!project) {
        return (
            <Container className="py-5">
                <h1>Project niet gevonden</h1>
                <Link to="/projecten">← Terug naar projecten</Link>
            </Container>
        )
    }

    return (
        <Container className="py-5">
            <Link to="/projecten">← Terug naar projecten</Link>

            <h1 className="mt-3">{project.titel}</h1>

            {/* Badges: technieken, solo/groep en status */}
            <div className="mb-4">
                {project.technieken.map((techniek) => (
                    <Badge key={techniek} bg="primary" className="me-1">{techniek}</Badge>
                ))}
                <Badge bg="secondary" className="me-1">{project.type}</Badge>
                <Badge bg={project.status === 'Af' ? 'success' : 'warning'} text={project.status === 'Af' ? 'light' : 'dark'}>
                    {project.status}
                </Badge>
            </div>

            {/* Screenshot of een grijs vak */}
            {project.afbeelding ? (
                <img src={project.afbeelding} alt={project.titel} className="img-fluid rounded border mb-4" />
            ) : (
                <div className="bg-light border rounded d-flex align-items-center justify-content-center text-muted mb-4" style={{ height: 250 }}>
                    Screenshot volgt
                </div>
            )}

            <Row className="g-4">
                {/* Links: uitleg over het project */}
                <Col md={7}>
                    <h2 className="h4">Over het project</h2>
                    <p>{project.omschrijving}</p>

                    {/* Alleen een GitHub-knop als er een link is */}
                    {project.github ? (
                        <Button href={project.github} target="_blank" rel="noreferrer" variant="primary">
                            Bekijk op GitHub
                        </Button>
                    ) : (
                        <p className="text-muted small">De code staat in een privé-repo van school.</p>
                    )}
                </Col>

                {/* Rechts: wat ik zelf heb gedaan */}
                <Col md={5}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Mijn bijdrage</Card.Title>
                            <ul className="mb-0">
                                {project.bijdrage.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectDetail