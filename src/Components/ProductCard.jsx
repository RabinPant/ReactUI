import React from "react";
import Price from "./Price";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-iamge-container">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-card-image"
        />

        <div className="product-card-details">
          <h2 className="product-card-title">{product.name}</h2>
          <p className="product-card-description">{product.description}</p>
        </div>
        <div className="product-card-footer">
          <div className="product-card-price">
            <Price currency="$" price={product.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
