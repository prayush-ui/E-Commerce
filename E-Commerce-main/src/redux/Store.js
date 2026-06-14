import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import RootReducer from "./RootReducer";

const store=configureStore({
    reducer:RootReducer,
});
export const persistor=persistStore(store);
export default store;