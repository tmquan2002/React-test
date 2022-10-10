import '../styles/news.css'
import { NewList } from '../shared/ListOfNews'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
import { Card, CardTitle, Col, Row } from 'react-materialize'

export default function News() {
    const { theme } = useContext(ThemeContext)
    return (
        <div id={theme.containerID} className='news-container'>
            <Row style={{ width: '80%' }}>
                <Col s={12} xl={8} className='main-news-container'>
                    <h2 style={{ textAlign: 'justify' }}>The childhood Mario franchise has released first official movie trailer: "The Super Mario Bros. Movie"</h2>
                    <div>10th August, 2022 | 9:00 PM GMT+7</div>
                    <iframe style={{ alignItems: 'center' }} width="100%" height="500px" src="https://www.youtube.com/embed/LLIn2HB7ud0" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }}>Nintendo Direct dedicated entirely to the upcoming Super Mario movie gave us our first proper look at the film, letting us see what all the familiar characters will look like and, more importantly, letting us hear what Chris Pratt sounds like as Nintendo’s mustachioed hero. It’s all timed to coincide with Nintendo’s appearance at Comic-Con this year.</p>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }}>Just a few days ago, Nintendo surprised the world with a little preview of the movie that only showed Mario from behind. Everyone started obsessing over how weirdly flat Mario’s butt turned out to be, given his profession and propensity for jumping.</p>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }}>The trailer starts with Bowser leading an entire koopa army to raid the Penguin castle (which is a very easy things to do) and just got the stars after. Jack Black nailed it with his voice actor with this, put a charming into the evil Bowser as always.</p>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }}>As you alreay known, Chris Pratt will voicing Mario. The trailer continue with this little plumber man get into the mushroom kingdom. Having a voice of "Guardian of the Galaxy" just feels so weird, it makes Mario being more American accent, just a normal Chris Pratt voice rather than a unique Mario Italian accent</p>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }}>The Super Mario movie is being produced by Nintendo in conjunction with Illumination Studios, the American animation studio behind films like The Lorax and the Despicable Me and Minions franchises. Miyamoto said that Nintendo worked closely with Illumination Studios throughout the entire thing.</p>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }}>“It’s been a lifelong dream of mine to become Mario,” Chris Pratt, who seemed very confused and almost like he was melting during the broadcast, said. Even though he used to not like Mario that much.</p>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }}>Jack Black, meanwhile, joked that he got jacked for the role of Bowser. Honestly, he sounds great in the role.</p>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }}><strong>In case you might forgot. Here's the entire Nintendo direct of the cast in the movie:</strong></p>
                    <iframe style={{ alignItems: 'center' }} width="100%" height="500px" src="https://www.youtube.com/embed/xe-K518aWOg" title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p style={{ textAlign: 'justify', fontSize: '18px' }}>The Mario movie will be hitting theaters in North America on April 7, 2023, unless it slips again.</p>
                </Col>
                <Col s={12} xl={4} style={{ paddingTop: '3.5%' }}>
                    <div style={{ textAlign: 'justify', fontSize: '170%' }}>More news</div>
                    {NewList.map((news) => (
                        <Card
                            header={<CardTitle image={news.img} />}
                            style={{ backgroundColor: theme.backgroundColor }}
                        >
                            {news.title}
                        </Card>
                    ))}
                </Col>
            </Row>
        </div >
    )
}