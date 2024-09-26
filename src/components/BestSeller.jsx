import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);

  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      // const bestProduct = products.filter((item) => item.bestSeller);
      setBestSeller(products.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="mt-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Check out our top-selling products, handpicked by our customers for
          quality and style.
        </p>
      </div>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : bestSeller.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No best sellers available at the moment.
        </p>
      )}
    </div>
  );
};

export default BestSeller;
