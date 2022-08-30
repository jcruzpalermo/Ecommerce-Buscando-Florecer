import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';



const Item = ({ info }) => {
    return (
        <Nav.Link as={Link} to={`/detalle/${info.id}`} className='producto'>
            <Row xs={1}className="g-6">
                    <Col md>
                        <Card className="bg-dark text-white">
                            <Card.Img variant="top" src={info.image} />
                            <Card.Body>
                                <Card.Title>{info.title}</Card.Title>
                                <Card.Text>
                                    {info.description}
                                    <br/>
                                    ${info.price}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </Nav.Link>
    );
}
// return (
//     <Link to={`/detalle/${info.id}`} className='producto'>
//         <Card className="bg-dark text-black">
//             <Card.Img src={info.image} alt={info.title} />
//             <Card.ImgOverlay>
//                 <Card.Title>{info.title}</Card.Title>
//                 <Card.Text>
//                     {info.description}
//                 </Card.Text>
//                 <Card.Text>${info.price}</Card.Text>
//             </Card.ImgOverlay>
//         </Card>
//     </Link>
// );


export default Item;