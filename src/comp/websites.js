import React from "react"
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'


export default function Websites() {
    return (
    <div className= "home--box">
        <Card className= "mx-auto" style={{ width: '50%' }}>
                <Card.Header className="text-center">Websites</Card.Header>
                <Card.Body>
                <Card.Text className="text-center">
                    Here is a Buch of websites I've build myself using what I have learned.
                </Card.Text>
                <Stack gap={2}>
                <Card.Link  href="https://symphonious-horse-dc17c7.netlify.app/"  target='_blank'>Online Business Card</Card.Link>
                <Card.Link  href="https://splendid-taiyaki-60c048.netlify.app"  target='_blank'>My Travel Journal</Card.Link>
                <Card.Link  href="https://delicate-brigadeiros-f7b2d9.netlify.app/"  target='_blank'>Solve the Riddle</Card.Link>
                <Card.Link  href="https://wacdonaldspage.netlify.app/"  target='_blank'>WacDonald's</Card.Link> 
                </Stack>
                </Card.Body>
        </Card> 
    </div>  
    )
}