import React from "react";
import { products } from "../../data/product-data";
import { ProductCard } from "../../components/product-card/product-card";

export const Products = () => {
  return (
    <>
      <div className="container">
        <div className="grid justify-center gap-5 items-center md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};