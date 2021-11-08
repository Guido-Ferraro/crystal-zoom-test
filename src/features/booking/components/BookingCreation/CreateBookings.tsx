import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { proceedToConfirmation } from "../../bookingSlice";
import styled from "styled-components";

const StyledButton = styled.button`
	position: relative;
	left: 0;
	bottom: 3px;
	border-radius: 3px;
	border: none;
	color: white;
	background-color: #2c88d9;
	padding: 0.7em;
	margin: 0;
	width: 105%;
	max-width: 420px;
`;

const CreateBookings = (props: { children: string }): JSX.Element => {
	const dispatch = useAppDispatch();
	const { dates, grade, isReturning, timeRange } = useAppSelector(
		(state) => state.booking.value
	);
	const message = `${isReturning ? "Returning:" : "First time booking:"} from ${
		timeRange.start
	} to ${timeRange.end} with ${grade} on the following dates: ${dates.join(
		", "
	)}`;
	const handleClick = () => {
		console.log(message);
		dispatch(proceedToConfirmation());
	};
	return <StyledButton onClick={handleClick}>{props.children}</StyledButton>;
};

export default CreateBookings;
