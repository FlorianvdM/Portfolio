import { Card, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Eén kaart met een project. Het project komt binnen als prop.
function ProjectCard({ project }) {
    return (
        <Card className="h-100">
            {/* Screenshot, of een grijs vak als er nog geen afbeelding is */}
            {project.afbeelding ? (
                <Card.Img variant="top" src={project.afbeelding} alt={project.titel} />
            ) : (
                <div className="bg-light border-bottom d-flex align-items-center justify-content-center text-muted" style={{ height: 160 }}>
                    Screenshot volgt
                </div>
            )}

            <Card.Body className="d-flex flex-column">
                <Card.Title>{project.titel}</Card.Title>
                <Badge bg="secondary" className="align-self-start mb-2">{project.type}</Badge>
                <Card.Text>{project.korteTekst}</Card.Text>

                {/* Voor elke techniek een badge */}
                <div className="mb-3">
                    {project.technieken.map((techniek) => (
                        <Badge key={techniek} bg="primary" className="me-1 mb-1">{techniek}</Badge>
                    ))}
                </div>

                {/* mt-auto duwt de knop naar de onderkant van de kaart */}
                <Button as={Link} to={`/projecten/${project.slug}`} variant="outline-primary" className="mt-auto">
                    Bekijk project
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard