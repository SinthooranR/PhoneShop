import React from "react";
import Navbar from "../../components/interface/Navbar";
import Profile from "../../components/account/Profile";
import ShippingInfo from "../../components/account/ShippingInfo";
import { useTypedSelector } from "../../redux/store";
import { accountSelector } from "../../redux/accountSlice";
import classes from "../../assets/styles/Profile.module.scss";

const ProfilePage = () => {
  const { account } = useTypedSelector(accountSelector);
  const acc: any = account;
  return (
    <>
      <Navbar />
      <div className={classes.ProfilePage}>
        <Profile account={account} />
        <ShippingInfo shipInfo={acc?.shipping} />
      </div>
    </>
  );
};

export default ProfilePage;
