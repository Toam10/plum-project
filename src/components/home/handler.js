export const inputHandler = (val, set) => {
	set(val);
};

export const getNbaPlayers = async (searchResults) => {
	const response = await fetch(
		`https://www.balldontlie.io/api/v1/players?search=${searchResults}&per_page=10`
	);
	const nbaPlayers = await response.json();
	return nbaPlayers;
};
