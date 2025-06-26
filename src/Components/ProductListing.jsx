import React from "react";
import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing-container">
      <div className="product-listing-grid">
        {products.length > 0 ? (
          products.map((product) => {
            <ProductCard key={product.productId} product={product} />;
          })
        ) : (
          <p className="product-listings-empty">No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
