import styled from "styled-components";
import portraitSVG from "../../assets/portrait.svg";
import chevronLeftSVG from "../../assets/chevron_left.svg";

const StyledCard = styled.div`
	border: 1px solid rgb(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	padding: 0.75em;
`;

const r = Math.random() * 255;
const g = Math.random() * 255;
const b = Math.random() * 255;

const StyledPortrait = styled.img`
	border-radius: 100%;
	padding: 0.35em;
	width: fit-content;
`;

const StyledDate = styled.div`
	font-size: 0.75rem;
	font-weight: 800;
`;

const StyledTime = styled.div`
	font-size: 0.75rem;
`;

const StyledContainerBig = styled.div`
	display: flex;
	width: 100%;
	margin: 0 2rem 0 0.5rem;
	flex-direction: column;
	justify-content: space-around;
`;
const StyledContainerSmall = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const StyledArrow = styled.img`
	width: fit-content;
	transform: rotate(180deg);
`;

const StyledAvailable = styled.div`
	color: #1aae9f;
	font-size: 0.75rem;
	font-weight: 600;
`;

const StyledUnavailable = styled.div`
	color: #e8833a;
	font-size: 0.75rem;
	font-weight: 600;
`;

console.log(r, g, b);
interface CardProps {
	date: string;
	timeRange: string;
	isAvailable: boolean;
}

const Team = [
	"Eden Fleming",
	"Aaliyah Hinton",
	"Ariana Curtis",
	"Halle Dyer",
	"Riya Randolph",
	"Owen Quinn",
	"Kaelyn Castaneda",
	"Joanna Acosta",
	"Makai Middleton",
	"Paulina Nguyen",
];

const AvailabilityCard = (props: CardProps): JSX.Element => {
	return (
		<StyledCard>
			<StyledPortrait
				src={portraitSVG}
				style={{
					backgroundColor: `rgb(${Math.random() * 255}, ${
						Math.random() * 255
					}, ${Math.random() * 255}, 0.2)`,
				}}
			/>

			<StyledContainerBig>
				<StyledContainerSmall>
					<StyledDate>{props.date}</StyledDate>
					<StyledTime>{props.timeRange}</StyledTime>
				</StyledContainerSmall>
				{props.isAvailable ? (
					<StyledAvailable>{`${
						Team[Math.floor(10 * Math.random())]
					} is available`}</StyledAvailable>
				) : (
					<StyledUnavailable>
						Suitable staff member will be assigned
					</StyledUnavailable>
				)}
			</StyledContainerBig>
			<StyledArrow src={chevronLeftSVG} />
		</StyledCard>
	);
};

export default AvailabilityCard;
