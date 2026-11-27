import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

// Projectenpagina: laat alle projecten uit projects.js zien als kaarten
function Projects() {
    return (
        <Container className="py-5">
            <h1>Mijn projecten</h1>
            <p className="text-muted">Een paar projecten waar ik de laatste tijd aan heb gewerkt, op school en voor een bedrijf.</p>

            {/* 1 kaart per rij op mobiel, 2 op tablet, 3 op laptop */}
            <Row xs={1} md={2} lg={3} className="g-4 mt-2">
                {projects.map((project) => (
                    <Col key={project.slug}>
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Projects