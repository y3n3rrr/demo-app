import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Modal from '../components/modal'

export default function Profile() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState();
    const [number, setNumber] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        getDummyJosn()
    }, [])


    const getDummyJosn = async () => {
        const response = await axios.get("https://dummyjson.com/products")
        console.log('response', response)
        const { products, total, limit } = response.data

        setProducts(products)
        setTotal(total)
    }

    const renderProducts = () => {
        const result = products.map((val, i) => {
            return (
                <Card style={{ width: '18rem', marginTop: 10 }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{val.title}</Card.Title>
                        <Card.Text>
                            {val.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => setModalShow(true)}>Show Details</Button>
                        <button className='araButonu' onClick={() => setModalShow(true)}> ara </button>
                        <button className='aramaButonu' onClick={() => setModalShow(true)}> arama </button>
                    </Card.Body>
                </Card>
            )
        })
        return result;
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <div>
                            {renderProducts()}
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>

    )
}


