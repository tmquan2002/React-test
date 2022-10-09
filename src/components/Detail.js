import { useParams } from 'react-router-dom'
import { FilmList } from '../shared/ListOfFilms'
import { ThemeContext } from './ThemeContext'
import ModalCase from './ModalCase';
import { useContext, useState } from 'react'
import { Col, Row, Button, Icon } from 'react-materialize'
import '../styles/details.css'

export default function Details() {
    const filmName = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const film = FilmList.find(obj => {
        return obj.id === filmName.id;
    });
    const { theme } = useContext(ThemeContext)

    return (
        <div className='film-detail-container' id={theme.containerID}>
            <Row className='detail-card'>
                <Col xl={4} l={12} className='detail-tumb'>
                    <img className='img-detail' src={`../${film.img}`} alt='' />
                </Col>
                <Col>
                    <Button onClick={() => setIsOpen(true)} className="btn-floating" style={{ backgroundColor: 'rgb(89, 180, 116)' }}>
                        <Icon>ondemand_video</Icon>
                    </Button>
                </Col>
                <Col xl={8} l={12} className='detail-info' style={{ backgroundColor: theme.backgroundColor }}>
                    <div className='detail-badge'>{film.title} ({film.year})</div>
                    <div className='product-details'>
                        <div className='product-price'>Price: {film.price} VND</div>
                        <p className='film-detail-info'>{film.info}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
            </Row>
        </div>
    )
}
