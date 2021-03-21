import { hot } from "react-hot-loader";
import styled from "styled-components";
import "./App.css";
import OfficeBuilding from "./building/OfficeBuilding";

const Container = styled.div`
	background-color: pink;
	height: 80vh;
	display: flex;
	align-items: center;
`;

function App() {
	return (
		<Container className="App">
			<OfficeBuilding />
		</Container>
	);
}

export default hot(module)(App);
