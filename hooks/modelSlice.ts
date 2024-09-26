import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the initial state
interface ModelState {
  isOpen: boolean;
}

// Define the initial state using the type
const initialState: ModelState = {
  isOpen: false,
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export default modelSlice.reducer; // Export the reducer (not the slice itself)
export const { open, close } = modelSlice.actions;
