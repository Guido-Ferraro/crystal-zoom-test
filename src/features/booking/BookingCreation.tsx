import Header from "./components/shared/Header";
import menuSVG from "./assets/menu.svg";
import Heading from "./components/shared/Heading";
import styled from "styled-components";
import GradeSelector from "./components/BookingCreation/GradeSelector";
import Button from "./components/BookingCreation/Button";
import TimeSelector from "./components/BookingCreation/TimeSelector";
import BeenBefore from "./components/BookingCreation/BeenBefore";
import CalendarDatePicker from "./components/BookingCreation/Calendar";
import CreateBookings from "./components/BookingCreation/CreateBookings";

const StyledFlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.5em;
	align-items: center;
	width: 100%;
`;
const StyledButtonContainer = styled.div`
	padding: 0.5em;

	display: flex;
	justify-content: center;
	width: 100%;
`;

const StyledButton = styled.button`
	font-size: 0.7rem;
	height: 100%;
	width: fit-content;
	padding: 0.75em 1.5em;
	background-color: #d3e6f7;
	border-radius: 5px;
	border: 2px solid #2c88d9;
	font-weight: bold;
	&:hover {
		cursor: pointer;
	}
`;

const BookingCreation = (): JSX.Element => {
	return (
		<>
			<Header src={menuSVG} heading={"Make a Booking"} user={"MS"} />

			<StyledFlexContainer>
				<Heading>Book from Scratch</Heading>
				<StyledButton>Re-Book Staff</StyledButton>
			</StyledFlexContainer>

			<StyledFlexContainer>
				<GradeSelector />
			</StyledFlexContainer>

			<StyledFlexContainer>
				<TimeSelector />
			</StyledFlexContainer>

			<BeenBefore />
			<StyledFlexContainer>
				<Button>Edit Default Settings (2 modified)</Button>
			</StyledFlexContainer>

			<StyledButtonContainer>
				<CalendarDatePicker />
			</StyledButtonContainer>
			<StyledFlexContainer>
				<CreateBookings>CREATE BOOKINGS</CreateBookings>
			</StyledFlexContainer>
		</>
	);
};

export default BookingCreation;
