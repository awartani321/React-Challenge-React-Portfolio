import './Project.css';


import Card from 'react-bootstrap/Card';
function Project(props) {
    const {title, image, link, github} = props.project;

    return (
        <div className="col-sm-4 card-container">
            <Card>
                <Card.Img variant="bottom" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Link href={link}>Live Site</Card.Link>
                    <Card.Link href={github}>Github Repo</Card.Link>                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default Project;