// Ducks Pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      // immer is behind the curtain
      state.value++;
    },
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
