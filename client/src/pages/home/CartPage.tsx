import React, { useState, Fragment } from "react";
import Navbar from "../../components/interface/Navbar";
import CartItem from "../../components/products/CartItem";
import ErrorMessage from "../../components/interface/ErrorMessage";
import { shopSelector } from "../../redux/shopSlice";
import { useTypedSelector } from "../../redux/store";
import { LoginService, ShopService } from "../../services";
import { Redirect, useHistory } from "react-router";
import classes from "../../assets/styles/Cart.module.scss";

const CartPage = () => {
  const user = LoginService.getUser();
  const { cart, totalSum } = useTypedSelector(shopSelector);
  const total = Math.round((Number(totalSum) + Number.EPSILON) * 100) / 100;
  const [isPurchase, setIsPurchase] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const purchaseAll = () => {
    ShopService.purchaseCart(user._id)
      .then(() => history.push("/purchased"))
      .catch((err) => {
        if (err.response.data.msg) {
          setError(err?.response?.data?.msg);
        }
      });
  };

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <div className={classes.CartPage}>
            <h2>Your Cart</h2>
            <div className={classes.CartContainer}>
              {cart && cart.length > 0 ? (
                cart.map((cart, index) => (
                  <Fragment key={index}>
                    <CartItem cart={cart} />
                  </Fragment>
                ))
              ) : (
                <h3 style={{ textAlign: "center" }}>
                  Nothing Available in Cart
                </h3>
              )}
            </div>
            {cart && cart.length > 0 && (
              <>
                <h2>Total Sum: ${total}</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {!isPurchase ? (
                    <button
                      onClick={() => setIsPurchase(true)}
                      className={classes.UpdateBtn}
                    >
                      Purchase
                    </button>
                  ) : (
                    <div>
                      <h3 style={{ textAlign: "center", marginTop: "0" }}>
                        Are you Sure?
                      </h3>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          onClick={() => {
                            setIsPurchase(false);
                            setError("");
                          }}
                          className={classes.RemoveBtn}
                          style={{ margin: "0 0.5rem" }}
                        >
                          No
                        </button>
                        <button
                          onClick={purchaseAll}
                          className={classes.UpdateBtn}
                          style={{ margin: "0 0.5rem" }}
                        >
                          Yes
                        </button>
                      </div>
                      <div>
                        <ErrorMessage message={error} />
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default CartPage;
