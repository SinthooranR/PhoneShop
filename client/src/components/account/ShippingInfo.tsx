import React from "react";
import FormInput from "../interface/FormInput";
import { useForm } from "react-hook-form";
import { LoginService, AccountService } from "../../services";
import classes from "../../assets/styles/Profile.module.scss";

const ShippingInfo = ({ shipInfo }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const user = LoginService.getUser();

  const addShipping = handleSubmit((formData) => {
    const data = {
      phone: formData.phone ? formData.phone : shipInfo.phone,
      address: formData.address ? formData.address : shipInfo.address,
      postalCode: formData.postalCode
        ? formData.postalCode
        : shipInfo.postalCode,
      country: formData.country ? formData.country : shipInfo.country,
      city: formData.city ? formData.city : shipInfo.city,
      province: formData.province ? formData.province : shipInfo.province,
    };

    AccountService.updateBilling(user._id, data)
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  });

  return (
    <div className={classes.ShippingInfo}>
      <div className={classes.ShippingForm}>
        <h4>Shipping Information</h4>
        <form>
          <FormInput
            register={register}
            inputValue="phone"
            placeholder="Enter Phone Number"
            label="Phone"
            type="text"
            minLength={10}
            maxLength={14}
            errors={errors}
            defaultValue={shipInfo?.phone}
          />

          <FormInput
            register={register}
            inputValue="address"
            placeholder="Enter Address for Billing/Shipping"
            label="Address"
            type="text"
            minLength={4}
            errors={errors}
            defaultValue={shipInfo?.address}
          />

          <FormInput
            register={register}
            inputValue="postalCode"
            placeholder="Enter Postal Code"
            label="Postal Code"
            type="text"
            minLength={5}
            maxLength={6}
            errors={errors}
            defaultValue={shipInfo?.postalCode}
          />

          <FormInput
            register={register}
            inputValue="country"
            placeholder="Enter Country"
            label="Country"
            type="text"
            minLength={4}
            errors={errors}
            defaultValue={shipInfo?.country}
          />

          <FormInput
            register={register}
            inputValue="city"
            placeholder="Enter City"
            label="City"
            type="text"
            minLength={3}
            errors={errors}
            defaultValue={shipInfo?.city}
          />

          <FormInput
            register={register}
            inputValue="province"
            placeholder="Enter Province/State"
            label="Province/State"
            type="text"
            minLength={3}
            errors={errors}
            defaultValue={shipInfo?.province}
          />
        </form>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={addShipping}>Update Information</button>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
