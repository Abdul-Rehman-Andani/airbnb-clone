import { configureStore } from "@reduxjs/toolkit";
import registorModelSlice from "@/hooks/registorModelSlice";
import signInModelSlice from "@/hooks/signInModelSlice";

const store = configureStore({
  reducer: {
    registorModel: registorModelSlice,
    signInModel : signInModelSlice
  },
});

export default store;
