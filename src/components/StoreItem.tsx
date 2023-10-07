import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

type StoreItemProps = {
  title: string;
  description: string;
  category: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({
  title,
  description,
  category,
  price,
  imgUrl,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(title);

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <div className="mb-4">
          <h5 className="fs-2">{title}</h5>
          <p className="text-muted">{category}</p>
          <p>{description}</p>
          <p className="fs-2">{formatCurrency(price)}</p>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(title)}>
              + Add To Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
              <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                <Button onClick={() => decreaseCartQuantity(title)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(title)}>+</Button>
              </div>
              <Button onClick={() => removeFromCart(title)} variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
