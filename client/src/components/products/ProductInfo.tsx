import React from "react";
import { useHistory } from "react-router";
import classes from "../../assets/styles/ProductInfo.module.scss";

interface InfoProps {
  productInfo: any;
  quantity: Number;
  addQuantity: () => void;
  removeQuantity: () => void;
  addToCartHandler: () => void;
}

const ProductInfo = ({
  productInfo,
  quantity,
  removeQuantity,
  addQuantity,
  addToCartHandler,
}: InfoProps) => {
  const history = useHistory();
  return (
    <div className={classes.PageContainer}>
      <h1>{productInfo?.productName}</h1>
      <div className={classes.Info}>
        <div className={classes.InfoGrid}>
          <div className={classes.Details}>
            <img src={productInfo?.productImage} alt="brand" />
            <h3>Manufacturer: {productInfo?.productBrand}</h3>
            <h3>Price: {productInfo?.price}</h3>
            <h3>{productInfo?.stock} Remaining</h3>
          </div>
          <div className={classes.Specifications}>
            <h2>Specifications</h2>
            <h4>OS: {productInfo?.specifications?.os}</h4>
            <hr />
            <h4>Storage: {productInfo?.specifications?.storage}GB</h4>
            <hr />
            <h4>RAM: {productInfo?.specifications?.ram}GB</h4>
            <hr />
            <h4>Screen Size: {productInfo?.specifications?.size} inches</h4>
            <hr />
            <h4>
              Resolution: {productInfo?.specifications?.resolution} Pixels
            </h4>
            <hr />
            <h4>Battery: {productInfo?.specifications?.battery}</h4>
            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>Quantity</h3>
              <span>
                <button onClick={removeQuantity} disabled={quantity === 1}>
                  -
                </button>{" "}
                {quantity}{" "}
                <button
                  onClick={addQuantity}
                  disabled={quantity === productInfo?.stock}
                >
                  +
                </button>
              </span>
            </div>
            <div className={classes.ButtonArea}>
              <button onClick={() => history.push("/products")}>Go Back</button>
              <button
                onClick={addToCartHandler}
                style={{
                  backgroundColor:
                    productInfo?.stock > 0 ? "#0275d8" : "#C9D6FF",
                  color: productInfo?.stock > 0 ? "white" : "black",
                  cursor: productInfo?.stock > 0 ? "pointer" : "unset",
                }}
                disabled={productInfo?.stock === 0}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
