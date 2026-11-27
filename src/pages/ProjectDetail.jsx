import { Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

// Detailpagina van één project
function ProjectDetail() {
    // useParams haalt het stukje uit de URL, bijv. /projecten/kitesurfschool -> "kitesurfschool"
    const { slug } = useParams()

    return (
        <Container className="py-5">
            <Link to="/projecten">← Terug naar projecten</Link>
            <h1 className="mt-3">Project: {slug}</h1>
            <p>Hier komt de uitleg en mijn bijdrage.</p>
        </Container>
    )
}

export default ProjectDetail