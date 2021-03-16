import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import Cours from "../components/Cours";
import Contact from "./ContactScreen";
import Message from '../components/Message';
import Loader from '../components/Loader';
import axios from "axios";
import { listCourses } from "../actions/coursActions";

const HomeScreen = () => {
  /*
  const [Courses,setCourses]=useState([])
  useEffect(()=>{
    const fetchCourses=async()=>{
      const {data}=await axios.get('/api/Courses')
      setCourses(data)
    }
    fetchCourses()
  },[])
  */
  const dispatch = useDispatch();
  const coursList = useSelector((state) => state.coursList);
  const { loading, error, courses } = coursList;
  useEffect(() => {
    dispatch(listCourses());
  }, [dispatch]);
  //const courses = [];
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
      <h1>Latest Courses</h1>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {courses.map((cours, index) => {
            if (index > 2) return true;
            else
              return (
                <Col key={cours._id} sm={12} md={6} lg={4} xl={4}>
                  <Cours cours={cours} />
                </Col>
              );
          })}
        </Row>
      )}

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
