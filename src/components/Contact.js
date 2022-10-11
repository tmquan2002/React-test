import '../styles/contact.css'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import { Container, Row, Col, Icon, TextInput, Textarea, Button } from 'react-materialize'

export default function Contact() {
    const { theme } = useContext(ThemeContext)
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div id={theme.containerID} className='contact-container'>
            <Container>
                <Row className='contact-title'>
                    <strong>CONTACT US</strong>
                </Row>
                <form className="form-container" onSubmit={handleSubmit}>
                    <TextInput icon={<Icon left>account_circle</Icon>} id="TextInput-38" label="Your name" />
                    <TextInput icon={<Icon left>local_phone</Icon>} id="TextInput-38" label="Your phone" />
                    <TextInput icon={<Icon left>email</Icon>} email id="TextInput-38" label="Email" validate />
                    <Textarea icon={<Icon left>mode_edit</Icon>} number id="TextArea-38" label="Any good films to share with us" validate />
                    <Textarea icon={<Icon left>question_answer</Icon>} number id="TextArea-38" label="Some feedbacks to improve our website" validate />
                    <Button style={{ backgroundColor: '#b8ff86', color: 'black', width: 'fit-content' }}>Submit</Button>
                </form>
                <Row >
                    <Col s={4} className='contact-info'>
                        <div><Icon left>email</Icon>nicemovies@gmail.com</div>
                    </Col>
                    <Col s={2} className='contact-info'>
                        <div><Icon left>local_phone</Icon>0982037xxx</div>
                    </Col>
                    <Col s={5} className='contact-info'>
                        <div ><Icon left>location_on</Icon>216 Võ Văn Ngần - Vincom Thủ Đức</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}