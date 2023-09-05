import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./Containers/TopNav";
import HomePage from "./pages/HomePage";
import ProductList from "./pages/ProductList";
import AboutUs from "./pages/AboutUs";
import Footnote from "./Containers/Footnote";
import Contact from "./pages/Contact";
import FavoriteProductsPage from "./pages/FavoriteProductsPage";

function App() {
  const [favoriteProducts] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produse" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/produse-favorite"
            element={
              <FavoriteProductsPage favoriteProducts={favoriteProducts} />
            }
          />
        </Routes>
        <Footnote />
      </div>
    </BrowserRouter>
  );
}

export default App;
