import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./../assets/CSS/ProductList.css";

const ProductCard = ({
  product,
  addToFavorites,
  isFavorite,
  removeFromFavorites,
}) => {
  const [isInFavorites, setIsInFavorites] = useState(isFavorite);

  const handleAddToFavorites = () => {
    addToFavorites(product);
    setIsInFavorites(true);
  };

  const handleRemoveFromFavorites = () => {
    removeFromFavorites(product);
    setIsInFavorites(false);
  };

  return (
    <Card className="border-custom small-card text h-100">
      <Card.Img variant="top" src={product.Thumbnail} alt={product.Denumire} />
      <Card.Body>
        <Card.Title>{product.Denumire}</Card.Title>
        <Card.Text>{product.Detalii}</Card.Text>
        <Card.Text>Pret: {product.Pret}</Card.Text>
        <Button
          className="category-buttons"
          onClick={
            isInFavorites ? handleRemoveFromFavorites : handleAddToFavorites
          }
        >
          {isInFavorites ? "Favorit" : "Adaugă la favorite"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
