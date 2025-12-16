import React from "react"
import MyImage from './picture.jpg'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


export default function Home () {
    return(
        <div className="home--box">
            <Image src={MyImage} className="rounded image" />
              <Card >
                <Card.Header>About Me</Card.Header>
                <Card.Body>
                <Card.Text>
            Hello and Welcome to my page.
            <p></p>
            I'm <strong>Connor McDonald</strong> {'(yes like the hamburger but without the money) '} 
            <p></p>
            I'm a film enthusist, award-wining writer, museum goer, boardgame player 
            and above all, a web developer.
            <p></p>
            I have a passion for creating clean, efficient, and user-friendly websites and applications.
            <p></p>
            I code with Frontend languages such as <strong>HTML, CSS, JavaScript, React, Bootstrap, and more.</strong>
            <p></p>
            I design using <strong>Figma</strong> to bring my ideas to life.
            <p></p>
            Curently solo deveoping  my own Mobile App using <strong>React Native</strong>.
            <p></p>
            Feel free to explore my portfolio and get in touch if you'd like to collaborate on a project or just say hi!
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}