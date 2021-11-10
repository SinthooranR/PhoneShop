import React, { useEffect, useState } from "react";
import Navbar from "../../components/interface/Navbar";
import ProductInfo from "../../components/products/ProductInfo";
import { useHistory } from "react-router";
import { LoginService, ShopService } from "../../services";
import classes from "../../assets/styles/ProductInfo.module.scss";

const ProductInfoPage = () => {
  const history = useHistory();
  const product: any = localStorage.getItem("productInfo");
  const [productInfo, setProductInfo] = useState<any>();
  const [quantity, setQuantity] = useState(1);
  const user = LoginService.getUser();

  useEffect(() => {
    if (product) {
      let parsedProduct = JSON.parse(product);
      setProductInfo(parsedProduct);
    } else {
      history.push("/products");
    }
  }, [history, product]);

  const adjustQuanitity = (type: string) => {
    switch (type) {
      case "inc":
        setQuantity(quantity + 1);
        break;
      case "dec":
        setQuantity(quantity - 1);
        break;
      default:
    }
  };

  const addToCartHandler = (
    userId: string,
    productId: string,
    quantity: Number
  ) => {
    ShopService.addProductToCart(quantity, userId, productId)
      .then(() => {
        history.push("/cart");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className={classes.ProductPage}>
        <ProductInfo
          productInfo={productInfo}
          quantity={quantity}
          addQuantity={() => adjustQuanitity("inc")}
          removeQuantity={() => adjustQuanitity("dec")}
          addToCartHandler={() =>
            addToCartHandler(user._id, productInfo._id, quantity)
          }
        />
      </div>
    </>
  );
};

export default ProductInfoPage;
