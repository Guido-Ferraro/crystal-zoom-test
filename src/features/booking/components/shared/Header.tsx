import styled from "styled-components";

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #dfe6ed;
	padding: 0.1em 0.5em;
`;

const StyledIcon = styled.img`
	filter: opacity(0.5);
	&:hover {
		cursor: pointer;
	}
`;

const StyledHeading = styled.h1`
	color: rgba(0, 0, 0, 0.8);
	font-size: 0.9rem;
`;

const StyledUser = styled.div`
	font-size: 0.75rem;
	color: #fcfdfd;
	background-color: #788896;
	padding: 0.5em 0.75em;
	border-radius: 100%;
	&:hover {
		cursor: pointer;
	}
`;

interface HeaderProps {
	src: any;
	heading: string;
	user: string;
	handleButton?: any;
}

const Header = (props: HeaderProps): JSX.Element => {
	const { src, heading, user } = props;

	return (
		<StyledHeader>
			<StyledIcon src={src} onClick={props.handleButton} />
			<StyledHeading>{heading}</StyledHeading>
			<StyledUser>{user}</StyledUser>
		</StyledHeader>
	);
};

export default Header;
