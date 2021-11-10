import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import accountReducer from "./accountSlice";
import shopReducer from "./shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    account: accountReducer,
  },
});

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
