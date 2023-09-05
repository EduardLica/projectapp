import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import mockData from "../assets/mock";
import ProductCard from "../components/ProductCard";
import "./../assets/CSS/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockData.produse);
    }, 1000);
  }, []);

  useEffect(() => {
    const savedFavoriteProducts =
      JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    setFavoriteProducts(savedFavoriteProducts);
  }, []);

  const addToFavorites = (product) => {
    setFavoriteProducts([...favoriteProducts, product]);
    localStorage.setItem(
      "favoriteProducts",
      JSON.stringify([...favoriteProducts, product])
    );
  };

  const removeFromFavorites = (product) => {
    const updatedFavorites = favoriteProducts.filter(
      (favProduct) => favProduct.idProdus !== product.idProdus
    );
    setFavoriteProducts(updatedFavorites);
    localStorage.setItem("favoriteProducts", JSON.stringify(updatedFavorites));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.Categorie === selectedCategory);

  return (
    <div className="page-container">
      <h1 className="text-titlu">Lista produselor</h1>
      <div className="container-buttons">
        <Button
          className="category-buttons"
          onClick={() => handleCategoryChange("all")}
          active={selectedCategory === "all"}
        >
          Toate produsele
        </Button>
        <Button
          className="category-buttons"
          onClick={() => handleCategoryChange("Miere")}
          active={selectedCategory === "Miere"}
        >
          Miere
        </Button>
        <Button
          className="category-buttons"
          onClick={() => handleCategoryChange("Polen")}
          active={selectedCategory === "Polen"}
        >
          Polen
        </Button>
        <Button
          className="category-buttons"
          onClick={() => handleCategoryChange("Tinctura")}
          active={selectedCategory === "Tinctura"}
        >
          Tinctura de propolis
        </Button>
        <Button
          className="category-buttons"
          onClick={() => handleCategoryChange("amestec")}
          active={selectedCategory === "amestec"}
        >
          Amestec miere
        </Button>
      </div>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 card-container">
        {filteredProducts.map((product) => (
          <Col key={product.idProdus}>
            <ProductCard
              product={product}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isFavorite={favoriteProducts.some(
                (favProduct) => favProduct.idProdus === product.idProdus
              )}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
