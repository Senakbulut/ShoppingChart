import React, { useState } from "react";
import ProductCard from "../ProductCard";
import { Container, Row } from "react-bootstrap";

const ProductsGrid = (props) => {
  const [products, onIncrement, onDecrement, cart] = useState([]);

  return (
    <Container>
      <Row sm="2" md="3">
        {props.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartItem={props.cart[product.id]}
            onIncrement={props.onIncrement}
            onDecrement={props.onDecrement}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductsGrid;
