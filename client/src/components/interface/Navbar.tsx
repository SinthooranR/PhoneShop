import React from "react";
import { BsCartFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useHistory } from "react-router";
import { LoginService } from "../../services";
import classes from "../../assets/styles/Navbar.module.scss";

const Navbar = () => {
  const user = LoginService.getUser();
  const history = useHistory();
  const logoutHandler = () => {
    LoginService.logout();
  };

  return (
    <nav className={classes.Navbar}>
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/products")}
      >
        {user ? user?.name : "Home"}
      </h2>
      <div>
        <BsCartFill onClick={() => history.push("/cart")} />
        <MdManageAccounts onClick={() => history.push("/account")} />
        <IoLogOut onClick={logoutHandler} />
      </div>
    </nav>
  );
};

export default Navbar;
