import styled from "styled-components";

const StyledHeading = styled.h2`
	font-size: 1.15rem;
	color: #6157f2;
	margin: 0;
`;

const Heading = (props: { children: string }): JSX.Element => {
	return <StyledHeading>{props.children}</StyledHeading>;
};

export default Heading;
