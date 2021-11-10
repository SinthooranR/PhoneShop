import React, { useState } from "react";
import ErrorMessage from "../interface/ErrorMessage";
import { ShopService } from "../../services";
import classes from "../../assets/styles/Cart.module.scss";

interface ItemProps {
  cart: any;
}

const CartItem = ({ cart }: ItemProps) => {
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(cart?.quantity);

  const incQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decQuantity = () => {
    setQuantity(quantity - 1);
  };
  const updateCartItem = () => {
    ShopService.updateProductInCart(
      Number(quantity),
      cart?._id,
      cart?.productId
    )
      .then(() => window.location.reload())
      .catch((err) => {
        if (err.response.data.msg) {
          setError(err?.response?.data?.msg);
        }
      });
  };

  return (
    <>
      {cart?.quantity !== 0 ? (
        <div className={classes.CartItem}>
          <div className={classes.ItemContainer}>
            <img src={cart?.productImage} alt="product" />
            <div className={classes.InfoDiv}>
              <h3>{cart?.productName}</h3>
              <h4>{cart?.productBrand}</h4>
              <h4>Current Total: ${cart?.totalPrice}</h4>
              <h4>Current Quantity: {cart?.quantity}</h4>
            </div>
            <div className={classes.QuantityDiv}>
              <span>
                <button onClick={decQuantity} disabled={quantity === 0}>
                  -
                </button>
                <h3 style={{ display: "inline-block", margin: "0 0.5rem" }}>
                  {quantity}
                </h3>
                <button onClick={incQuantity}>+</button>
              </span>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "1rem",
                }}
              >
                <button
                  onClick={updateCartItem}
                  className={
                    quantity === 0 ? classes.RemoveBtn : classes.UpdateBtn
                  }
                >
                  {quantity === 0 ? "Remove" : "Update"}
                </button>
              </div>
              <div
                style={{
                  padding: "0 2.5rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ErrorMessage message={error} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CartItem;
