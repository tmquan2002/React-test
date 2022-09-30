import { useParams } from 'react-router-dom'
import { FilmList } from '../shared/ListOfFilms'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import '../styles/details.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Details() {
    const filmName = useParams();
    const film = FilmList.find(obj => {
        return obj.id === filmName.id;
    });
    const { theme } = useContext(ThemeContext)

    return (
        <div className='film-detail-container' id={theme.containerID}>
            <Container>
                <Row className='detail-card'>
                    <Col className='detail-tumb'>
                        <img className='img-detail' src={`../${film.img}`} alt='' />
                    </Col>
                    <Col className='detail-info' style={{ backgroundColor: theme.backgroundColor }}>
                        <div className='detail-badge' style={{ fontSize: '50px' }}>{film.title} ({film.year})</div>
                        <div className='product-details'>
                            <div className='product-price'>Price: {film.price} VND</div>
                            <p className='film-detail-info'>{film.info}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
