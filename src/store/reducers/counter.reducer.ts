import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    addValue: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    removeValue: (state, action: PayloadAction<number>) => {
      state.counter -= action.payload;
    },
  },
});

export const { increment, decrement, addValue, removeValue } = counterSlice.actions;

export default counterSlice.reducer;
