/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import * as Style from "./style";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Favorites = () => {
	const [nbaPlayers, setNbaPlayers] = useState([]);
	const headerText = "YOUR FAVORITES";
	const listHeader = nbaPlayers.length
		? "YOUR RESULTS"
		: "Wating for your favorites...";

	useEffect(async () => {
		const response = await fetch(
			`${process.env.React_App_BACKEND_URL}/favorite`
		);
		const players = await response.json();
		setNbaPlayers(players);
	}, []);

	const mapingPlayers = (player, index) => {
		return (
			<Style.PlayerContainer onClick={() => console.log(player)} key={index}>
				<Style.PlayerContentFullName>
					{`Full name:${player.fullName}`}
				</Style.PlayerContentFullName>
				<Style.PlayerContentTeam>
					{`Team name:${player.teamName}`}
					<div style={{ float: "right", position: "absolute", right: "10px" }}>
						<FontAwesomeIcon
							style={{ color: "rgba(255, 211, 63)" }}
							onClick={async (event) => {
								event.stopPropagation();
								const newNbaPlayers = nbaPlayers.filter(
									(p) => p._id !== player._id
								);
								console.log(newNbaPlayers);
								setNbaPlayers(newNbaPlayers);
								await fetch(`${process.env.React_App_BACKEND_URL}/favorite`, {
									method: "DELETE",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({
										fullName: player.fullName,
										teamName: player.teamName,
									}),
								});
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
			</Style.HeaderContainer>
			<Style.HeaderText>{listHeader}</Style.HeaderText>
			<Style.PlayersListWrapper>
				<Style.PlayersList>{nbaPlayers.map(mapingPlayers)}</Style.PlayersList>
			</Style.PlayersListWrapper>
		</>
	);
};

export default Favorites;
