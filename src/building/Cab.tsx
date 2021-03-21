import React from "react";
import { Elevator } from "./interfaces";
import styled from "styled-components";

const StyledCab = styled.div`
	width: 200px;
	height: 200px;
	background-color: red;
`;
interface Props {
	elevator: Elevator;
	onRemoveElevator: any;
}

export const Cab = ({ elevator, onRemoveElevator }: Props) => {
	return (
		<StyledCab>
			<h4>id: {elevator.id}</h4>
			<p>currently on: {elevator.floorCurrent}</p>
			<button onClick={() => onRemoveElevator(elevator.id)}>
				remove elevator
			</button>
			<button onClick={() => console.log(elevator)}>TEST</button>
		</StyledCab>
	);
};

export default Cab;
