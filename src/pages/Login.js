import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message:"",
      status:false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props)
    const { email, password } = this.state;
    console.log("email, password", email, password);
    if(email == "admin@admin.com" && password == "123" ){

    }
  };


  handleChangeEmail = (value) => {
    this.setState({
      email: value
    })
  }

  handleChangePassword = (value) => {
    this.setState({
      password: value
    })
  }

  componentWillMount(){
    console.log("rendering: componentWillMount!");
  }

  componentDidMount(){
    console.log("rendering: componentDidMount!");
  }

  shouldComponentUpdate(){
    console.log("rendering: shouldComponentUpdate!");
    return true;
  }

  componentWillMount(){
    console.log("rendering: componentWillMount!");
  }
  componentWillUpdate(){
    console.log("rendering: componentWillUpdate!");
  }
  componentDidUpdate(){
    console.log("rendering: componentDidUpdate!");
  }
  componentDidCatch(){
    console.log("rendering: componentDidCatch!");
  }

  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={(e) => this.handleChangeEmail(e.target.value)}
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
                  value={this.state.password}
                  onChange={(e) => this.handleChangePassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={this.handleSubmit.bind(this)}
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
}

export default Login;
