import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import Cours from "../components/Cours";
import Contact from "./ContactScreen";
import Courses from "../courses";

const HomeScreen = () => {
  return (
    <>
      <h2 className='text-center my-3 p-1 rounded'>About US</h2>
      <Card className='text-center'>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Link to='/About'>
          <Button variant='primary'>More</Button>
          </Link>
        </Card.Body>
      </Card>
      <h2 className='text-center'>Courses</h2>
      <Row>
        {Courses.map((cours, index) => {
          if (index > 2) return true;
          else
            return (
              <Col key={cours._id} sm={12} md={6} lg={4} xl={4}>
                <Cours cours={cours} />
              </Col>
            );
        })}
      </Row>
      <Row>
        <Col className='text-center'>
          <Link to='/Courses'>
            <Button variant='primary'>More</Button>
          </Link>
        </Col>
      </Row>

      <Contact />
    </>
  );
};

export default HomeScreen;
