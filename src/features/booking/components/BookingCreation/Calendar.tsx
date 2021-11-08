import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import Button from "react-multi-date-picker/components/button";
import { useAppDispatch } from "../../../../app/hooks";
import { dateSelected } from "../../bookingSlice";

const CalendarDatePicker = (): JSX.Element => {
	const [date, setDate] = useState(new Date().setDate(0));
	const currentDate = new Date();
	const today = currentDate.getDate();

	const dispatch = useAppDispatch();
	const handleClick = (arr: DateObject[]) => {
		const fullDates = arr.map((date) => {
			const fullDate =
				date.weekDay.shortName +
				" " +
				date.day.toString() +
				" " +
				date.month.shortName +
				" " +
				date.year.toString();
			return fullDate;
		});
		dispatch(dateSelected(fullDates));
	};

	return (
		<DatePicker
			multiple={true}
			hideYear={true}
			minDate={new Date().setDate(today)}
			maxDate={new Date().setDate(60)}
			placeholder="Select Dates"
			format="ddd D MMM YYYY"
			arrow={false}
			calendarPosition="bottom-center"
			style={{ width: "100%" }}
			offsetY={-270}
			render={
				<Button
					style={{
						marginBottom: "280px",
						width: "100%",
					}}
				>
					Click to Select Dates
				</Button>
			}
			onChange={(array) =>
				array && Array.isArray(array)
					? handleClick(array)
					: handleClick([array!])
			}
		/>
	);
};

export default CalendarDatePicker;
