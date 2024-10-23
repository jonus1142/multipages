import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Cart.css";

function Cart({ carts, setCarts }) {
  return (
    <div className="cart-container">
      <div className="carts-items-container">
        {carts.map((cart) => {
          return (
            <Card style={{ width: "13rem" }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text className="">
                  <b>${cart.price}</b>
                </Card.Text>
                <Button
                  variant="outline-danger"
                  onClick={() =>
                    setCarts(carts.filter((c) => c.id !== cart.id))
                  }
                >
                  {" "}
                  Remove to carts{" "}
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <h4>
        Product: <span className="badge bg-dark">{carts.length}</span> , Total:{" "}
        <span className="badge bg-secondary">
          ${carts.reduce((a, b) => a + b.price, 0).toFixed(2)}
        </span>{" "}
      </h4>
      <button className="btn btn-warning"><span className="bi bi-wallet2"></span>&nbsp;Checkout</button>
    </div>
  );
}

export default Cart;
