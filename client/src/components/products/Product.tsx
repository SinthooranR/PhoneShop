import React from "react";
import classes from "../../assets/styles/Home.module.scss";

interface ProductProps {
  productName: string;
  productBrand: string;
  price: Number;
  stock: Number;
  productImage?: string;
  viewProduct: () => void;
}

const Product = ({
  productName,
  productBrand,
  price,
  stock,
  productImage,
  viewProduct,
}: ProductProps) => {
  return (
    <div className={classes.Product}>
      <img src={productImage || ""} alt="product" />
      <h4>{productName}</h4>
      <h4>{productBrand}</h4>
      <p>${price}</p>
      <p>{stock} Remaining</p>
      <div>
        <button onClick={viewProduct}>Learn More</button>
      </div>
    </div>
  );
};

export default Product;
