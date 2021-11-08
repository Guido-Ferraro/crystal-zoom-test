import styled from "styled-components";
import BookingCreation from "./BookingCreation";
import BookingConfirmation from "./BookingConfirmation";
import { useAppSelector } from "../../app/hooks";
const FeatureContainer = styled.div`
	max-width: 420px;
	min-height: 100%;
	margin: auto;
	display: flex;
	flex-direction: column;
`;

const BookingManager = (): JSX.Element => {
	const bookingReady = useAppSelector(
		(state) => state.booking.value.isComplete
	);
	return (
		<FeatureContainer>
			{!bookingReady ? <BookingCreation /> : <BookingConfirmation />}
		</FeatureContainer>
	);
};

export default BookingManager;
