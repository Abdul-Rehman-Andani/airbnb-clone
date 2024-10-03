import { createSlice } from "@reduxjs/toolkit";

// Define the type for the initial state
interface ModelState {
    isSignInOpen : boolean;
}

// Define the initial state using the type
const initialState: ModelState = {
  isSignInOpen: false,
};

const signInModelSlice = createSlice({
  name: "signInModel",
  initialState,
  reducers: {
    openSignInModel: (state) => {
      state.isSignInOpen = true;
    },
    closeSignInModel: (state) => {
      state.isSignInOpen = false;
    },
  },
});

// Export the reducer (not the slice itself)
export default signInModelSlice.reducer; 
export const { openSignInModel, closeSignInModel } = signInModelSlice.actions;
