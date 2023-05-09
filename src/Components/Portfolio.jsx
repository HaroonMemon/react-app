import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GoogleForm from "../Assets/images/google-form.png";

function Portfolio() {
    return (
        <div className="Portfolio" style={{padding:'10px',overflow:'hidden'}}>
            <h1 style={{color:'#7a7ae6',textAlign:'center'}}>Porfolio</h1>
            <Row xs={2} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={GoogleForm} />
                            <Card.Body>
                                <Card.Title> Google Form </Card.Title>
                                <Card.Text>
                                    Made with Html Css and JavaScript
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export default Portfolio;