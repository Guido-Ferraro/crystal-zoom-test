import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface BookingState {
	value: {
		isComplete: boolean;
		grade: string;
		timeRange: {
			start: string;
			end: string;
		};
		isReturning: boolean;
		dates: string[];
	};
}

const initialState: BookingState = {
	value: {
		isComplete: false,
		grade: "",
		timeRange: {
			start: "",
			end: "",
		},
		isReturning: false,
		dates: [],
	},
};

export const bookingSlice = createSlice({
	name: "booking",
	initialState,
	reducers: {
		returningChecked: (state) => {
			state.value.isReturning = !state.value.isReturning;
		},
		gradeSelected: (state, action: PayloadAction<string>) => {
			state.value.grade = action.payload;
		},
		dateSelected: (state, action: PayloadAction<string[]>) => {
			state.value.dates = action.payload;
		},
		timeStartSelected: (state, action: PayloadAction<string>) => {
			state.value.timeRange.start = action.payload;
		},
		timeEndSelected: (state, action: PayloadAction<string>) => {
			state.value.timeRange.end = action.payload;
		},
		proceedToConfirmation: (state) => {
			if (
				state.value.grade.length &&
				state.value.dates &&
				state.value.timeRange.start &&
				state.value.timeRange.end
			) {
				state.value.isComplete = !state.value.isComplete;
			}
		},
	},
});

export const {
	returningChecked,
	gradeSelected,
	timeStartSelected,
	timeEndSelected,
	proceedToConfirmation,
	dateSelected,
} = bookingSlice.actions;

export const selectBooking = (state: RootState) => state.booking.value;

export default bookingSlice.reducer;
