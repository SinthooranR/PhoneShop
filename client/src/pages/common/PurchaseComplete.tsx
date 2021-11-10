import React from "react";
import { useHistory } from "react-router";
import classes from "../../assets/styles/Login.module.scss";

const PurchaseComplete = () => {
  const history = useHistory();
  return (
    <div className={classes.Redirect}>
      <div className={classes.Card}>
        <div>
          <h3>Purchase Successful</h3>
          <p style={{ marginTop: "1rem" }}>
            Enjoy the Free Money on the Test Run!
          </p>
          <hr style={{ color: "white", marginTop: "1.5rem" }} />
          <p
            style={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => {
              history.push("/cart");
              window.location.reload();
            }}
          >
            Click here to Return to Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseComplete;
