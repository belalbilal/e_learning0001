import React , {useState, useEffect}from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const CoursScreen = ({match}) => {
    
    const [Cours,setCours]=useState({})
    useEffect(()=>{
      const fetchCours=async()=>{
        const {data}=await axios.get(`/api/Courses/${match.params.id}`)
        setCours(data)
      }
      fetchCours()
    },[match])
    return (
    <>
    <Link className='btn btn-primary my-3' to='/'>Go Back</Link>
    <Row>
        <Col md={6}>
            <Image src={Cours.image} alt={Cours.title} fluid/>
        </Col>
        <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>{Cours.title}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={Cours.rating} text={`${Cours.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>
                  Price:${Cours.price}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description:{Cours.description}
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
                                <strong>{Cours.Instructor}</strong>
                            </Col>

                        </Row>

                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>
                                category:
                            </Col>
                            <Col>
                               <strong>{Cours.category}</strong>
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
    
    
    </>
       
        
    )
}

export default CoursScreen
