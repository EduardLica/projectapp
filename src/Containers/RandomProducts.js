import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import mockData from "../assets/mock";
import "./../assets/CSS/RandomProducts.css";

const RandomProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const updateRandomProducts = () => {
      const randomIndexes = [];
      while (randomIndexes.length < 4) {
        const randomIndex = Math.floor(Math.random() * mockData.produse.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }

      const updatedRandomProducts = randomIndexes.map(
        (index) => mockData.produse[index]
      );
      setRandomProducts(updatedRandomProducts);
    };

    updateRandomProducts();

    const intervalId = setInterval(updateRandomProducts, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="randomcontainer">
      <h2>Produse cautate</h2>
      <Row xs={1} sm={2} md={2} lg={4} className="g-4">
        {randomProducts.map((product, index) => (
          <Col key={index}>
            <Card className="border-random random-card h-100">
              <Card.Img
                variant="top"
                src={product.Thumbnail}
                alt={product.Denumire}
              />
              <Card.Body>
                <Card.Title>{product.Denumire}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RandomProducts;
