"use client";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import ProductCategory from "./components/ProductCategory";
import { ProductCategoryType } from "@/types/ProductCategory";

export default function Home() {
  const [productCategories, setProductCategories] = useState<
    ProductCategoryType[]
  >([]);
  const getProductCategory = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/categories"
      ).then((res) => res.json());

      setProductCategories(response);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductCategory();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ padding: "0px !important" }}>
      <Navbar />
      <ProductCategory productCategories={productCategories} />
    </Container>
  );
}
