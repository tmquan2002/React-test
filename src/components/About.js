import '../styles/about.css'
import { Collapsible, CollapsibleItem, Icon, Row } from "react-materialize";
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

export default function About() {
    const { theme } = useContext(ThemeContext)
    return (
        <div id={theme.containerID} className='about-container'>
            <Row style={{ width: '70%' }}>
                <div>Last updated: 9th of October, 2022 | 2:00 PM GMT+7</div>
                <Collapsible accordion style={{ backgroundColor: theme.backgroundColor }}>
                    <CollapsibleItem
                        expanded={false}
                        header="What is this website about?"
                        icon={<Icon>info</Icon>}
                        node="div"
                    >
                        This is a small website featuring some cool movies that has been on the theater throughout the years (We will covering mostly from 1990 and later).
                        This website is still new, only a few movies have been in the home page but will definately being update more and more in the future.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="The team"
                        icon={<Icon>people</Icon>}
                        node="div"
                    >
                        TMQuan is the main owner of this website with the help of some of his friends. It's a personal school project about styling a good website using ReactJS (which is the main library used here)
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="Can I submit our own movies to the home page? If yes, how can I do it?"
                        icon={<Icon>question_answer</Icon>}
                        node="div"
                    >
                        You can do it by navigate to contact page, which is right above this page and submit your suggestions there.
                        You can also give us some feedbacks about, it will be very appreciated since you also helps us improve the page even more.
                    </CollapsibleItem>
                    <CollapsibleItem
                        expanded={false}
                        header="Have you ever planned to expand this website further?"
                        icon={<Icon>lightbulb_outline</Icon>}
                        node="div"
                    >
                        Right now, not much. We do have some cool ideas to expand this page even more in the future like a suggestion to the nearest theater where the movie is being released or a adding system instead of a form in contact page so we can easily approved these requests.                    </CollapsibleItem>
                </Collapsible>
            </Row>
        </div >
    )
}