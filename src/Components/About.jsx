import React from "react";
import BotImage from "../Assets/images/Bot.png";
import { Container, Row, Col, Image } from 'react-bootstrap';
function About(){
    return(
        <div className="about">
            <h1 style={{color:'#7a7ae6',textAlign:'center'}}>About</h1>
            <Container>
                <Row>
                    <Col md={4}>
                        <Image src={BotImage} rounded style={{width:'300px'}} />
                        {/* <img src="" alt="" /> */}
                        <h3 style={{color:'#7a7ae6'}}>M. Haroon Memon</h3>
                        <p>Hyderabad, Pakistan</p>
                        <p>0303 *******</p>
                        <p>memonharoon839@gmail.com</p>
                    </Col>
                    <Col md={8}>
                        <h2 style={{color:'#7a7ae6'}}>Summary</h2>
                        <p>I am M. Haroon Memon a skilled web developer with expertise in HTML, CSS, Bootstrap, JavaScript, and React. With proficiency in these technologies, I have been able to develop responsive and interactive web applications. 
                            My attention to detail and ability to adapt to new technologies makes him a valuable asset to any development team.</p>
                        <h2 style={{color:'#7a7ae6'}}>Education</h2>
                        <h3 style={{color:'#7a7ae6'}}>SAYLANI MASS IT TRAINING</h3>
                        <p>WEB & MOBILE APP DEV | 2022 - Present</p>
                        <p>I am currently enrolled in SMIT course (Web and Mobile Hybrid Application Development).
                            I have full grip on HTML, CSS and Some of Java Script.a</p>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default About;   