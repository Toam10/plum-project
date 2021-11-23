import React, { useEffect, useState } from "react";
import * as Style from "./style";
import * as Handler from "./handler";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
	const [inputVal, setInputVal] = useState("");
	const [nbaPlayers, setNbaPlayers] = useState([]);
	const headerText = "NBA PLAYERS";
	const buttonText = "Search";
	const listHeader = nbaPlayers.length ? "NBA PLAYERS RESULTS" : "";

	const mapingPlayers = (player, index) => {
		const { team } = player;
		const firstNameInlineStyle = {
			width: "fit-content",
			backgroundColor:
				player.first_name?.trim()?.toLowerCase() === inputVal?.toLowerCase()
					? "yellow"
					: "white",
		};
		const lastNameInlineStyle = {
			width: "fit-content",
			backgroundColor:
				player.last_name?.trim()?.toLowerCase() === inputVal?.toLowerCase()
					? "yellow"
					: "white",
		};

		return (
			<Style.PlayerContainer onClick={() => console.log(player)} key={index}>
				<Style.PlayerContentFullName>
					{`Full name`}:
					<div style={firstNameInlineStyle}>{`${player.first_name}`}</div>-
					<div style={lastNameInlineStyle}>{`${player.last_name}`}</div>
				</Style.PlayerContentFullName>
				<Style.PlayerContentTeam>
					{`Team name:${team.full_name}`}
					<div style={{ float: "right", position: "absolute", right: "10px" }}>
						<FontAwesomeIcon
							onClick={async (event) => {
								event.stopPropagation();
								if (event.target.style.color === "rgb(255, 211, 63)") {
									await fetch(`${process.env.React_App_BACKEND_URL}/favorite`, {
										method: "DELETE",
										headers: { "Content-Type": "application/json" },
										body: JSON.stringify({
											fullName: `${player.first_name}-${player.last_name}`,
											teamName: team.full_name,
										}),
									});
									return (event.target.style.color = "black");
								}
								await fetch(`${process.env.React_App_BACKEND_URL}/favorite`, {
									method: "POST",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({
										fullName: `${player.first_name}-${player.last_name}`,
										teamName: team.full_name,
									}),
								});
								event.target.style.color = "rgba(255, 211, 63)";
							}}
							size="2x"
							icon={Icon.faStar}
						/>
					</div>
				</Style.PlayerContentTeam>
			</Style.PlayerContainer>
		);
	};
	return (
		<>
			<Style.HeaderContainer>
				<Style.HeaderContainerBackground></Style.HeaderContainerBackground>
				<Style.HeaderText>{headerText}</Style.HeaderText>
				<Style.Form
					onSubmit={async (event) => {
						event.preventDefault();
						const players = await Handler.getNbaPlayers(inputVal);
						setNbaPlayers(players.data);
						console.log(nbaPlayers);
					}}
				>
					<Style.SearchField
						value={inputVal}
						onChange={({ target: { value } }) => {
							return Handler.inputHandler(value, setInputVal);
						}}
					></Style.SearchField>
					<Style.SearchButton type="submit">{buttonText}</Style.SearchButton>
				</Style.Form>
			</Style.HeaderContainer>
			<Style.HeaderText>{listHeader}</Style.HeaderText>
			<Style.PlayersListWrapper>
				<Style.PlayersList>{nbaPlayers.map(mapingPlayers)}</Style.PlayersList>
			</Style.PlayersListWrapper>
		</>
	);
};

export default Home;
