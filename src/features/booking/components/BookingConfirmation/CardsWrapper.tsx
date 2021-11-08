import AvailabilityCard from "./AvailabilityCard";
import styled from "styled-components";
import { useAppSelector } from "../../../../app/hooks";

const StyledCardWrapper = styled.div`
	padding: 1.1rem;
`;

const CardsWrapper = (): JSX.Element => {
	const { dates, timeRange } = useAppSelector((state) => state.booking.value);
	const selection = dates.map((date, index) => (
		<AvailabilityCard
			key={index}
			date={date}
			timeRange={`${timeRange.start} - ${timeRange.end}`}
			isAvailable={!!Math.floor(Math.random() + 0.5)}
		/>
	));

	return <StyledCardWrapper>{selection}</StyledCardWrapper>;
};

export default CardsWrapper;
