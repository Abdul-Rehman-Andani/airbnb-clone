import { configureStore } from "@reduxjs/toolkit";
import modelSlice from "@/hooks/modelSlice";

const store = configureStore({
    reducer : {
        model : modelSlice
    }
});

export default store;