import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
  },
  reducers: {
    plus: (state, action) => {
      if (!isNaN(+action.payload[0]) && !isNaN(+action.payload[1])) {
        state.value = +action.payload[0] + +action.payload[1];
      }
      else{
        state.value = "not a number"
      }
    },
    minus: (state, action) => {
        console.log(!isNaN(+action.payload[0]), !isNaN(+action.payload[1]));
      if (!isNaN(+action.payload[0]) && !isNaN(+action.payload[1])) {
        state.value = +action.payload[0] - +action.payload[1];
      }
      else{
        state.value = "not a number"
      }
    },
    divide: (state, action) => {
      if (!isNaN(+action.payload[0]) && !isNaN(+action.payload[1])) {
        if (+action.payload[1] !== 0) {
          state.value = +action.payload[0] / +action.payload[1];
        } else {
          state.value = "error";
        }
      }
      else{
        state.value = "not a number"
      }
    },
    multy: (state, action) => {
      if (!isNaN(+action.payload[0]) && !isNaN(+action.payload[1])) {
        state.value = +action.payload[0] * +action.payload[1];
      }
      else{
        state.value = "not a number"
      }
    },
  },
});

export const { plus, minus, divide, multy } = calculatorSlice.actions;

export default calculatorSlice.reducer;
