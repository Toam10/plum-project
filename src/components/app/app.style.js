import styled from "styled-components";

export const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
	margin: 0px;
`;
export const Navbar = styled.nav`
	width: 100%;
	height: 50px;
	padding: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
`;

export const NavbarBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	background-color: inherit;
	z-index: -1;
`;

export const NavbarContentContainer = styled.div`
	width: 30%;
	display: flex;
	justify-content: space-evenly;
`;

export const NavbarContent = styled.div`
	font-size: 25px;
	font-weight: lighter;
	font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
	transition: 0.5s;
	transform: scale(1);
	cursor: pointer;
	&:hover {
		transition: 0.5s;
		transform: scale(1.1);
		text-decoration: underline;
	}
`;
