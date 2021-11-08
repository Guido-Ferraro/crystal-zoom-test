import styled from "styled-components";

const StyledButton = styled.button`
	font-size: 0.7rem;
	height: 100%;
	width: 100%;
	padding: 0.75em 1.5em;
	background-color: #d3e6f7;
	border-radius: 5px;
	border: 2px solid #2c88d9;
	font-weight: bold;
	&:hover {
		cursor: pointer;
	}
`;

const Button = (props: { children: string }): JSX.Element => {
	return <StyledButton>{props.children}</StyledButton>;
};

export default Button;
