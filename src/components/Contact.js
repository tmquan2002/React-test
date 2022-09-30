import '../styles/contact.css'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className='contact-container' id={theme.containerID}>
            <Container>
                <Row className='contact-title'>
                    CONTACT US
                </Row>
                <Row>
                    <Col>
                        <img className='contact-image' src='../../assets/images/Email.png' alt=''></img>
                        <span className='contact-info'>nicefilm@gmail.com</span>
                    </Col>
                    <Col>
                        <img className='contact-image' src='../../assets/images/phone.png' alt=''></img>
                        <span className='contact-info'>0982037xxx</span>
                    </Col>
                    <Col>
                        <img className='contact-image' src='../../assets/images/location.png' alt=''></img>
                        <span className='contact-info'>216 Võ Văn Ngần - Vincom Thủ Đức</span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}