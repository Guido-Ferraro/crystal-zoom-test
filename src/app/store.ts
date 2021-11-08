import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/booking/bookingSlice";
import { gradesApiSlice } from "../features/booking/gradesApislice";

export const store = configureStore({
	reducer: {
		booking: bookingReducer,
		[gradesApiSlice.reducerPath]: gradesApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(gradesApiSlice.middleware);
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
