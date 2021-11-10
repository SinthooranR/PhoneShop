import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { LoginService, ShopService } from "../services";

interface AppState {
  isFetching: Boolean;
  isError: Boolean;
  errorMessage: string;
  products: Products[];
  cart: [];
  totalSum: Number | null;
}

interface Products {
  _id: string;
  productName: string;
  productBrand: string;
  productImage: string;
  stock: Number;
  price: Number;
  specifications: Specifications | null;
}

interface Specifications {
  storage: Number | null;
  ram: Number | null;
  battery: string;
  os: string;
  size: Number | null;
  resolution: string;
}

const userId = LoginService.getUser();

export const getAllProducts = createAsyncThunk(
  "shop/products",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ShopService.getAllProducts();
      return await response;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

export const getCart = createAsyncThunk(
  "shop/cart",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await ShopService.getCart(userId?._id);
      console.log(response);
      return await response;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

const initialState: AppState = {
  cart: [],
  products: [],
  isFetching: false,
  isError: false,
  errorMessage: "",
  totalSum: null,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.isFetching = false;

      state.products = payload.products;

      return state;
    });

    builder.addCase(getAllProducts.pending, (state, { payload }) => {
      state.isFetching = true;
    });

    builder.addCase(getAllProducts.rejected, (state, { payload }) => {
      state.isError = true;
      state.isFetching = false;
    });

    builder.addCase(getCart.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.cart = payload.cart;
      state.totalSum = payload.totalSum;
      return state;
    });
    builder.addCase(getCart.pending, (state, { payload }) => {
      state.isFetching = true;
    });

    builder.addCase(getCart.rejected, (state, { payload }) => {
      state.isError = true;
      state.isFetching = false;
    });
  },
});

export const shopSelector = (state: RootState) => state.shop;
export default shopSlice.reducer;
