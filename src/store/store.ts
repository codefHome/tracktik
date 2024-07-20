import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tracktikAPI } from "../api/tracktikAPI";
import trackingReducer from "./slices/trackSlice"
const store = configureStore({
  reducer: {
    tracking:trackingReducer,
    [tracktikAPI.reducerPath]: tracktikAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([tracktikAPI.middleware]),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
