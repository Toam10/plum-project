import styled from "styled-components";

export const SearchField = styled.input`
	width: 400px;
	height: 50px;
	font-size: 30px;
	font-weight: 400;
`;

export const HeaderContainer = styled.header`
	width: 100%;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
`;

export const HeaderText = styled.h1`
	font-size: 100px;
	font-weight: lighter;
	font-family: "Courier New", Courier, monospace;
`;

export const HeaderContainerBackground = styled.div`
	opacity: 0.8;
	background-color: orange;
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0px;
	top: 0px;
	z-index: -1;
`;

export const SearchButton = styled.button`
	width: fit-content;
	height: 50px;
	padding: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	font-weight: lighter;
	background-color: inherit;
`;

export const Form = styled.form`
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: center;
	gap: 30px;
`;

export const PlayerContainer = styled.div`
	width: 700px;
	height: 100px;
	background-color: inherit;
	border: 1px solid black;
	position: relative;
	display: flex;
	align-items: center;
	font-size: 25px;
	font-weight: lighter;
	border-radius: 10px;
	flex-direction: column;
	gap: 20px;
`;

export const PlayerContainerBackground = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0px;
	top: 0px;
	background-color: inherit;
`;

export const PlayersListWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

export const PlayersList = styled.div`
	width: 70%;
	height: fit-content;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: flex-start;
	flex-wrap: wrap;
	gap: 10px;
`;

export const PlayerContentFullName = styled.div`
	width: 90%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
export const PlayerContentTeam = styled.div`
	width: 90%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
