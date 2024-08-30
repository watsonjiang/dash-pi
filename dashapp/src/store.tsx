import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    severity: "success",
    text: "",
  },
  reducers: {
    alertEv: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { alertEv } = alertSlice.actions;

export const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
  },
});

export type DashRootState = ReturnType<typeof store.getState>;
export type DashDispatch = typeof store.dispatch;
export const useDashDispatch = useDispatch.withTypes<DashDispatch>();
export const useDashSelector = useSelector.withTypes<DashRootState>();
