import styled from "styled-components";

const StyledSelector = styled.select`
	width: 100%;
	font-size: 0.9rem;
	padding: 0.5em 0.25em;
	font-weight: 500;
	border: 2px solid rgb(0, 0, 0, 0.15);
	border-radius: 3px;
	text-align: center;
`;

const Selector = (props: {
	children: JSX.Element[];
	handleClick: any;
}): JSX.Element => (
	<StyledSelector onChange={(e) => props.handleClick(e.target.value)}>
		{props.children}
	</StyledSelector>
);

export default Selector;
