import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { normalizeName } from '../utils/characterUtils';


export default function Character ({
    id,
    name,
    hair_color,
    eye_color,
    birth_year,
    gender,
}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <div>
                        <ul>
                            <li>hair_color: {hair_color}</li>
                            <li>eye_color: {eye_color}</li>
                            <li>birth_year: {birth_year}</li>
                            <li>gender: {gender}</li>
                        </ul>
                    </div>
                </Card.Text>
                <Button as={Link} to={`/characters/${id}`} variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}