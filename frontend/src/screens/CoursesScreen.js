import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import Cours from "../components/Cours";
import Courses from "../courses";

const CoursesScreen = () => {
    return (
        <>
        <h1 className="text-center">Courses</h1>
        <Row>
        {Courses.map((cours, index) => 
                  (
              <Col key={cours._id} sm={12} md={6} lg={4} xl={4}>
                <Cours cours={cours} />
              </Col>
               )
        )}
      </Row>
            
        </>
    )
}

export default CoursesScreen
