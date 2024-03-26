"use client";
import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import GlobalApi from "@/_utils/GlobalApi";

function ProductSection() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts();
  }, []);

  const getLatestProducts = () => {
    GlobalApi.getLatestProducts().then((resp) => {
      console.log(resp.data.data);
      setProductList(resp.data.data);
    });
  };

  return (
    productList && (
      <div className="px-10 md:px-20">
        <ProductList productList={productList} />
      </div>
    )
  );
}

export default ProductSection;
