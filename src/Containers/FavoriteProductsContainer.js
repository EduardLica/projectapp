import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const FavoriteProductsContainer = ({
  favoriteProducts,
  removeFromFavorites,
}) => {
  return (
    <div className="page-container">
      <h1 className="text-titlu">Produse favorite</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 card-container">
        {favoriteProducts.map((product) => (
          <Col key={product.idProdus}>
            <ProductCard
              product={product}
              isFavorite={true}
              removeFromFavorites={removeFromFavorites}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FavoriteProductsContainer;
