import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const CardGrid = ({ store }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={store.thumb} />
        <Card.Body>
          <Card.Text>{store.name}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardGrid;
