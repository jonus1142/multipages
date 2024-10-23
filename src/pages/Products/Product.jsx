import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Product.css";

function Product({ products, carts, setCarts }) {
  return (
    <div className="product-container">
      {products.map((products) => {
        return (
          <Card style={{ width: "13rem" }} key={products.id}>
            <Card.Img variant="top" src={products.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{products.title}</Card.Title>
              <Card.Text className="">
                <b>${products.price}</b>
              </Card.Text>
              <Card.Text>
                {carts.find((cart) => cart.id === products.id) ? (
                  <span className="badge bg-danger">Product added</span>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => setCarts([...carts, products])}
                  >
                    Add to carts
                  </Button>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Product;
