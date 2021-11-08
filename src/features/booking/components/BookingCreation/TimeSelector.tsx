import Selector from "../shared/Selector";
import styled from "styled-components";
import arrowRightSVG from "../../assets/arrow_right.svg";
import { useAppDispatch } from "../../../../app/hooks";
import { timeStartSelected, timeEndSelected } from "../../bookingSlice";
const StyledArrow = styled.img`
	min-width: 40px;
	opacity: 0.6;
`;

const TimeSelector = (): JSX.Element => {
	const timePoints = Array(48)
		.fill(0)
		.map((item, index: number) => {
			const hour: number = Math.floor(index / 2);
			const minute: number = 30 * (index % 2);
			const time: string =
				hour.toLocaleString("en-US", {
					minimumIntegerDigits: 2,
				}) +
				":" +
				minute.toLocaleString("en-US", {
					minimumIntegerDigits: 2,
				});

			return time;
		});

	const dispatch = useAppDispatch();

	const options = (placeholder: string) => {
		const arr = timePoints.map((time, index) => {
			return (
				<option key={index} value={time}>
					{time}
				</option>
			);
		});
		arr.unshift(
			<option key={"a"} disabled selected>
				{placeholder}
			</option>
		);
		return arr;
	};
	const handleClickStart = (value: string) => {
		dispatch(timeStartSelected(value));
	};
	const handleClickEnd = (value: string) => {
		dispatch(timeEndSelected(value));
	};

	return (
		<>
			<Selector handleClick={handleClickStart}>
				{options("Select time")}
			</Selector>
			<StyledArrow src={arrowRightSVG} />
			<Selector handleClick={handleClickEnd}>{options("Select time")}</Selector>
		</>
	);
};

export default TimeSelector;
