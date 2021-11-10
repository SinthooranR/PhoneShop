import React, { Fragment } from "react";
import Navbar from "../../components/interface/Navbar";
import Reminder from "../../components/interface/Reminder";
import Product from "../../components/products/Product";
import { Redirect, useHistory } from "react-router";
import { LoginService } from "../../services";
import { shopSelector } from "../../redux/shopSlice";
import { useTypedSelector } from "../../redux/store";
import classes from "../../assets/styles/Home.module.scss";

const HomePage = () => {
  const user = LoginService.getUser();
  const history = useHistory();
  const { products, cart } = useTypedSelector(shopSelector);
  console.log(cart);
  localStorage.removeItem("productInfo");
  const viewProduct = (product: any) => {
    localStorage.setItem("productInfo", JSON.stringify(product));
    history.push({ pathname: `/products/${product._id}` });
  };

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <div className={classes.Home}>
            <Reminder />
            <div className={classes.ProductContainer}>
              {products && products.length > 0 ? (
                <div className={classes.ProductGrid}>
                  {products.map((product) => (
                    <Fragment key={product._id}>
                      <Product
                        {...product}
                        viewProduct={() => viewProduct(product)}
                      />
                    </Fragment>
                  ))}
                </div>
              ) : (
                <h1 style={{ textAlign: "center", paddingTop: "15rem" }}>
                  No Products Available at the Moment
                </h1>
              )}
            </div>
          </div>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default HomePage;
