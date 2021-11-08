import Header from "./components/shared/Header";
import chevronLeftSVG from "./assets/chevron_left.svg";
import { useAppDispatch } from "../../app/hooks";
import { proceedToConfirmation } from "./bookingSlice";
import Heading from "./components/shared/Heading";
import CardsWrapper from "./components/BookingConfirmation/CardsWrapper";
import styled from "styled-components";
import questionSVG from "./assets/question.svg";
const BookingConfirmation = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const handleReturn = () => {
		dispatch(dispatch(proceedToConfirmation()));
	};
	const StyledHeadingWrapper = styled.div`
		padding: 1em 1em 0 1em;
	`;
	const StyledButton = styled.button`
		width: fit-content;
		align-self: center;
		margin: 1em;
		color: white;
		background-color: #2c88d9;
		border: none;
		padding: 1em;
		border-radius: 3px;
		font-size: 0.75rem;
	`;
	const StyledHelp = styled.img`
		border-radius: 100%;
		height: 60px;
		width: 60px;
		padding: 10px;
		background-color: #2c88d9;
		margin: 10px;
		align-self: flex-end;
	`;

	return (
		<>
			<Header
				src={chevronLeftSVG}
				heading={"Accept Bookings"}
				user={"MS"}
				handleButton={handleReturn}
			></Header>
			<StyledHeadingWrapper>
				<Heading> Bookings to be Confirmed </Heading>
			</StyledHeadingWrapper>
			<CardsWrapper />
			<StyledButton>CONFIRM BOOKINGS</StyledButton>
			<StyledHelp src={questionSVG} />
		</>
	);
};

export default BookingConfirmation;
