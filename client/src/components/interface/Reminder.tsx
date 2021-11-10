import React from "react";
import { accountSelector } from "../../redux/accountSlice";
import { useTypedSelector } from "../../redux/store";
import classes from "../../assets/styles/Home.module.scss";

const Reminder = () => {
  const { account } = useTypedSelector(accountSelector);
  let componentAcc: any = account;
  return (
    <>
      {componentAcc?.balance === 100000 ? (
        <div className={classes.Reminder}>
          <div>
            <p>
              Im feeling generous, so heres $100,000, Buy a Phone to get rid of
              this Message.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Reminder;
