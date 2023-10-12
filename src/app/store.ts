import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    // devTools: false  // Disallow development tools, to keep our app state secure. In development we may remove this line      // TODO: uncomment this
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
