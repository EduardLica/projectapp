import React, { useState, useEffect } from "react";
import FavoriteProductsContainer from "../Containers/FavoriteProductsContainer";

const FavoriteProductsPage = () => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const savedFavoriteProducts =
      JSON.parse(localStorage.getItem("favoriteProducts")) || [];
    setFavoriteProducts(savedFavoriteProducts);
  }, []);

  const removeFromFavorites = (product) => {
    const updatedFavorites = favoriteProducts.filter(
      (favProduct) => favProduct.idProdus !== product.idProdus
    );
    setFavoriteProducts(updatedFavorites);
    localStorage.setItem("favoriteProducts", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <FavoriteProductsContainer
        favoriteProducts={favoriteProducts}
        removeFromFavorites={removeFromFavorites}
      />
    </>
  );
};

export default FavoriteProductsPage;
