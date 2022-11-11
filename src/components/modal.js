import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function MyModal({ title, description, price, discountPercentage, rating, stock, brand, category, onHide, show}) {
//const { title, description, price, discountPercentage, rating, stock, brand, category,onHide ,show} = props
  return (
    <Modal
    show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}({stock})
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <caption>
            {description}
          </caption>
          <thead>
          <tr>
              <th>Tanım</th>
              <th>Deger</th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={()=>{alert("table clicked!")}}>
              <td>price</td>
              <td>{price}</td>
            </tr>
            <tr>
              <td>discountPercentage</td>
              <td>{discountPercentage}</td>
            </tr>
            <tr>
              <td>rating</td>
              <td>{rating}</td>
            </tr>
            <tr>
              <td>brand</td>
              <td>{brand}</td>
            </tr>
            <tr>
              <td>category</td>
              <td>{category}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal


