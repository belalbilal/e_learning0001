import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { Container, Card, Accordion, Button } from "react-bootstrap";

const Cours = ({ cours }) => {
  return (
    <div>
      <Accordion defaultActiveKey='0'>
        <Card className='my-3 p-1 rounded'>
          <Accordion.Toggle as={Button} variant='link' eventKey='1'>
            <Card.Img src={cours.image} variant='top' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>
              <Link to={`/Cours/${cours._id}`}>
                <Card.Title as='div'>
                  <strong>{cours.title}</strong>
                </Card.Title>
              </Link>
              <Card.Text as='div'>
                <Rating
                  value={cours.rating}
                  text={`${cours.numReviews} reviews`}
                />
              </Card.Text>
              <Card.Text as='h3'>${cours.price}</Card.Text>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Cours;
