import React, { useState } from "react";
import "./ProductCard.css";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import { MinusCircleIcon, PlusCircleIcon, CartIcon } from "../icons";

const ProductCard = (props) => {
  const [product, onIncrement, onDecrement, cartItem] = useState([]);

  return (
    <Col style={{ margin: "30px 0px" }}>
      <Card className="">
        <Card.Img
          top
          className="image"
          src={props.product.image}
          alt={props.product.title}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title tag="h5">{props.product.title}</Card.Title>
          <Card.Subtitle tag="h6" className="mb-2 text-muted">
            {props.product.subtitle}
          </Card.Subtitle>
          <Card.Text className="text">{props.product.description}</Card.Text>
          <Row>
            {props.cartItem.value > 0 ? (
              <>
                <Col>
                  <Button
                    variant="danger"
                    size="lg"
                    onClick={() => props.onDecrement(props.cartItem)}
                    style={{ "margin-top": "auto" }}
                  >
                    <MinusCircleIcon />
                  </Button>
                </Col>
                <Col>
                  <Badge
                    variant="secondary"
                    style={{ fontSize: 30, width: "100%" }}
                  >
                    {props.cartItem.value}
                  </Badge>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => props.onIncrement(props.cartItem)}
                    style={{ "margin-top": "auto" }}
                  >
                    <PlusCircleIcon />
                  </Button>
                </Col>
              </>
            ) : (
              <Col>
                <Button
                  variant="primary"
                  onClick={() => props.onIncrement(props.cartItem)}
                  style={{ "margin-top": "auto" }}
                >
                  Add to Cart
                  <CartIcon />
                </Button>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
