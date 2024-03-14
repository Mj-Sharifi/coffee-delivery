import cartSliceReducer from "./Slices/cartSlice";
import formSliceReducer from "./Slices/formSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session'
import { thunk } from "redux-thunk";

const persistConfig = { key: "root", storage:storageSession };
const persistedCartReducer = persistReducer(persistConfig, cartSliceReducer);
const persistedFormReducer = persistReducer(persistConfig, formSliceReducer);
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    form: persistedFormReducer
  },
  middleware: () =>[thunk]
});
export const persistor = persistStore(store);
