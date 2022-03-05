import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const CardGrid = ({ store }) => (
  <>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={store.thumb} />
      <Card.Body>
        <Card.Text>{store.name}</Card.Text>
      </Card.Body>
    </Card>
  </>
);

export default CardGrid;
