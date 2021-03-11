import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import Cours from "../components/Cours";
import axios from 'axios'
import { listCourses } from "../actions/coursActions";

const CoursesScreen = () => {
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
    }, [dispatch])

    return (
        <>

<h1 className="text-center">Courses</h1>
      {loading ? (
        <h2>Loading....</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
        {courses.map((cours, index) => 
                  (
              <Col key={cours._id} sm={12} md={6} lg={4} xl={4}>
                <Cours cours={cours} />
              </Col>
               )
        )}
      </Row>   
      )}        
        </>
    )
}

export default CoursesScreen
