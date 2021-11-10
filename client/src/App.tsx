import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { getAllProducts, getCart } from "./redux/shopSlice";
import { getUser } from "./redux/accountSlice";
import { useDispatch } from "react-redux";
import { LoginService } from "./services";
import { LoginPage, AuthRedirect, PurchaseComplete } from "./pages/common";
import { HomePage, CartPage, ProfilePage, ProductInfoPage } from "./pages/home";
import "./App.css";

function App() {
  const user = LoginService.getUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getAllProducts());
      dispatch(getCart());
      dispatch(getUser());
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <Switch>
        <Route exact path={["/", "/login"]} component={LoginPage} />
        <Route exact path="/redirect" component={AuthRedirect} />
        <Route exact path="/products" component={HomePage} />
        <Route exact path="/products/:id" component={ProductInfoPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/account" component={ProfilePage} />
        <Route exact path="/purchased" component={PurchaseComplete} />
      </Switch>
    </div>
  );
}

export default App;
