import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer >
            <Container >
                <Row >
                    <Col className="text-center p-3" >
                        Copyright &copy; E learning
                    </Col>
                </Row>
                </Container>  
        </footer>
    )
}

export default Footer
