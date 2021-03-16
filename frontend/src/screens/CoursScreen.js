import React , {useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message';
import Loader from '../components/Loader';
import {listCoursDetails} from '../actions/coursActions'

import axios from 'axios'

const CoursScreen = ({match}) => {
    /*
    const [Cours,setCours]=useState({})
    useEffect(()=>{
      const fetchCours=async()=>{
        const {data}=await axios.get(`/api/Courses/${match.params.id}`)
        setCours(data)
      }
      fetchCours()
    },[match])
    */
   const dispatch=useDispatch()
   const coursDetails=useSelector(state=>state.coursDetails)
   const {loading,error,cours}=coursDetails
   useEffect(()=>{
       dispatch(listCoursDetails(match.params.id))
   },[dispatch,match])
 
    return (
    <>
    <Link className='btn btn-primary my-3' to='/'>Go Back</Link>
    {loading ? (<Loader/>) 
    : error ? (<Message variant='danger'>{error}</Message>)
    : (
        <Row>
        <Col md={6}>
            <Image src={cours.image} alt={cours.title} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>{cours.title}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={cours.rating} text={`${cours.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>
                  Price:${cours.price}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description:{cours.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Instructor:
                            </Col>
                            <Col>
                                <strong>{cours.Instructor}</strong>
                            </Col>
    
                        </Row>
    
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                category:
                            </Col>
                            <Col>
                               <strong>{cours.category}</strong>
                            </Col>
    
                        </Row>
    
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                WhatsApp:
                            </Col>
                            <Col>
                               <strong>0606060606</strong>
                            </Col>
    
                        </Row>
    
                    </ListGroup.Item>
    
                </ListGroup>
            </Card>
        </Col>
    </Row>
    
       
    
      )}
  
    
    </>
       
        
    )
}

export default CoursScreen

