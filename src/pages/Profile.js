import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Modal from '../components/modal'
import { getData } from '../utils/api'
import {useSelector, useDispatch} from 'react-redux'
import {GetProducts} from '../actions/productActions'

export default function Profile() {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState();
    const [number, setNumber] = useState(0);
    const [modalShow, setModalShow] = useState(false);
    const [title, setTitle] = useState("");
    const [stock, setStock] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [rating, setRating] = useState(0);
    const [brand, setBrand] = useState(0);
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState(0);
    const [description, setDescription] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState({});

    const reduxData = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        getDummyJosn()
        dispatch(GetProducts())
    }, [])

    const getDummyJosn = async () => {
        const result = await getData("https://dummyjson.com/products");
        const { products, total, limit } = result
        setProducts(products)
        setTotal(total)
    }

    const renderProducts = () => {
        const result = products.map((val, i) => {
            return (
                <Col xs={4}>
                    <Card key={val.id} style={{ width: '18rem', marginTop: 10 }}>
                        <Card.Img variant="top" src={val.images[0]} />
                        <Card.Body>
                            <Card.Title>{val.title}</Card.Title>
                            <Card.Text>
                                {val.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => selectProduct(val)}>Show Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
        return result;
    }

    const selectProduct = (data) => {
        //const {title, description,price, discountPercentage, rating, stock, brand, category} = data
        // setTitle(title)
        // setStock(stock)
        // setDiscountPercentage(discountPercentage)
        // setDescription(description)
        // setPrice(price)
        // setRating(rating)
        // setBrand(brand)
        // setCategory(category)
        setSelectedProduct(data)
        setModalShow(true)
    }

    return (
        <div>
            <Container>
                <Row>
                    {renderProducts()}
                </Row>
            </Container>
            <Modal
                // title={title}
                // stock={stock}
                // description={description}
                // price={price}
                // discountPercentage={discountPercentage}
                // rating={rating}
                // brand={brand}
                // category={category}
                {...selectedProduct}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>

    )
}


