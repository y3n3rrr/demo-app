import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.renderWelcomeM = this.renderWelcomeM.bind(this);
  }

  handleSubmit = () => {
    const { email, password } = this.state;

    console.log("email, password", email, password);
  };

  renderWelcomeM = () => {
    const { email, password } = this.state;

    if (email !== "") {
      if (email === "yener" && password === "123") {
        return <p>Merhaba {email}</p>;
      } else {
        return <p>Hatalı gırıs denemesı</p>;
      }
    }
  };

  render() {
    return (
      <Container>
        <p>Log in</p>
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
                  onChange={(e) =>
                    this.setState({
                      email: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    this.setState({
                      password: e.target.value,
                    })
                  }
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
          {this.renderWelcomeM()}
        </Row>
      </Container>
    );
  }
}

export default Home;
