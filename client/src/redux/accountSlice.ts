import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { LoginService, AccountService } from "../services";

interface AppState {
  account: {};
  isFetching: Boolean;
  isError: Boolean;
  errorMessage: string;
}
const user = LoginService.getUser();

export const getUser = createAsyncThunk(
  "user/getAccount",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await AccountService.getUser(user?._id);
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
  account: {},
  isFetching: false,
  isError: false,
  errorMessage: "",
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.isFetching = false;

      state.account = payload.users;

      return state;
    });

    builder.addCase(getUser.pending, (state, { payload }) => {
      state.isFetching = true;
    });

    builder.addCase(getUser.rejected, (state, { payload }) => {
      state.isError = true;
      state.isFetching = false;
    });
  },
});

export const accountSelector = (state: RootState) => state.account;
export default accountSlice.reducer;
