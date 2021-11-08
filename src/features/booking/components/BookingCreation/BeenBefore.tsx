import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { returningChecked } from "../../bookingSlice";
const StyledCheckbox = styled.input`
	margin-right: 0.5em;
`;
const StyledLabel = styled.label`
	width: fit-content;
	padding: 0.25em;
	font-weight: 500;
	font-size: 0.9rem;
	display: flex;
	&:hover {
		cursor: pointer;
	}
`;

const BeenBefore = (): JSX.Element => {
	const isReturning = useAppSelector(
		(state) => state.booking.value.isReturning
	);
	const dispatch = useAppDispatch();
	const handleClick = () => {
		dispatch(returningChecked());
	};

	return (
		<StyledLabel>
			<StyledCheckbox
				type="checkbox"
				checked={isReturning}
				onClick={handleClick}
			/>
			Been Before
		</StyledLabel>
	);
};

export default BeenBefore;
