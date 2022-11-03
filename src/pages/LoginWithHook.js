import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom'

const LoginWithHook = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();

  let navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("props",props)
    if(email == "admin@admin.com" && password == "123" ){
      setMessage("Giris basarili, dashboard ekranina yonlendirileceksiniz..")
      setTimeout(() => {
        navigate(`/dashboard`);
      }, 1500);    
      
    }else{
      setMessage("kullanici adi yada sifre hatali")
    }
  };

  const handleChangeEmail = (value) => {
    setEmail(value)
  }

  const handleChangePassword = (value) => {
    setPassword(value)
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          {message}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => handleChangeEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => handleChangePassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}


export default LoginWithHook;
