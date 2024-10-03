import { createSlice } from "@reduxjs/toolkit";

// Define the type for the initial state
interface ModelState {
  isRegistorOpen : boolean;
}

// Define the initial state using the type
const initialState: ModelState = {
  isRegistorOpen: false,
};

const registorModelSlice = createSlice({
  name: "registorModel",
  initialState,
  reducers: {
    openRegistorModel: (state) => {
      state.isRegistorOpen = true;
    },
    closeRegistorModel: (state) => {
      state.isRegistorOpen = false;
    },
  },
});

// Export the reducer (not the slice itself)
export default registorModelSlice.reducer; 
export const { openRegistorModel, closeRegistorModel } = registorModelSlice.actions;
