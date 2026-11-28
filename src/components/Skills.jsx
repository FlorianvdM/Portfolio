import { Badge } from 'react-bootstrap'

// Lijst met talen en tools die ik kan gebruiken
// Iets toevoegen? Zet het er gewoon bij in de lijst.
const skills = ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Bootstrap', 'PHP', 'Laravel', 'MySQL', 'Docker', 'Git']

function Skills() {
    return (
        <div className="d-flex flex-wrap gap-2">
            {/* Voor elke skill een badge */}
            {skills.map((skill) => (
                <Badge key={skill} bg="light" text="dark" className="border fs-6 fw-normal">
                    {skill}
                </Badge>
            ))}
        </div>
    )
}

export default Skills