import React from "react"
import MyImage from './picture.jpg'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


export default function Home () {
    return(
        <div className="home--box">
            <Image src={MyImage} className="rounded image" />
              <Card style={{ width: '50%' }}>
                <Card.Header>About Me</Card.Header>
                <Card.Body>
                <Card.Text>
            Hello and Welcome to my page. I'm <strong>Connor McDonald</strong> {'(yes like the hamburger but without the money) '} 
            I'm a film enthusist, award-wining writer, museum goer, boardgame player 
            and above all, a web developer.
            Afer all, I made this Website. Here you will find various projects I've been working on, 
            as well as a link to my GitHub that demonstrates the code I used for this Website and 
            my other projects too.
            My Resume and Linkden are both accessible so feel free to check them out and a download my resume.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}