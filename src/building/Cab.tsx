import React from "react";
import { Elevator } from "./interfaces";
import styled from "styled-components";

const StyledCab = styled.div`
	width: 200px;
	height: 200px;
	background-color: red;
`;
interface Props {
	index: number;
	elevator: Elevator;
	onRemoveElevator: any;
}

export const Cab = ({ index, elevator, onRemoveElevator }: Props) => {
	return (
		<StyledCab>
			<p>
				# {index}, {elevator.id} {"   "}
				<button onClick={() => onRemoveElevator(elevator.id)}>X</button>
			</p>
			<p>current: {elevator.floorCurrent}</p>
			<p>
				current tasks:{" "}
				{elevator.stack.map((task) => {
					return <p>{task}</p>;
				})}
			</p>

			<button onClick={() => console.log(elevator)}>LOG </button>
		</StyledCab>
	);
};

export default Cab;
