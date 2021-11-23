import Home from "../home";
import * as Style from "./app.style";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Favorites from "../favorites";
function App() {
	return (
		<Style.AppContainer>
			<Router>
				<Style.Navbar>
					<Style.NavbarContentContainer>
						<Link to="/">
							<Style.NavbarContent>Home</Style.NavbarContent>
						</Link>
						<Link to="/Favorites">
							<Style.NavbarContent>Favorites</Style.NavbarContent>
						</Link>
					</Style.NavbarContentContainer>
				</Style.Navbar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Favorites" element={<Favorites />} />
				</Routes>
			</Router>
		</Style.AppContainer>
	);
}

export default App;
