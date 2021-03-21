//import React, { useEffect } from "react";
import styled from "styled-components";
import { Elevator } from "./interfaces";
//import Cab from "./Cab";

const Foundation = styled.div`
	background-color: orange;
	width: 100%;
	height: auto;
	border: thick solid red;
`;
interface Props {
	elevators: Elevator[];
	onCreateElevatorPressed: () => any;
	onRemoveElevator: (body: any) => any;
}

function MainShaft({
	elevators,
	onCreateElevatorPressed,
	onRemoveElevator,
}: Props) {
	/* 	useEffect(() => {
		onCreateElevatorPressed();
	}, [onCreateElevatorPressed]);
 */
	return (
		<Foundation>
			<h2>elevators</h2>
			<button onClick={() => console.log(elevators)}>test</button>
			<button onClick={() => onCreateElevatorPressed()}>add elevator</button>
			{/* <div>{showEle()}</div> */}
			{/* <Cab elevator={elevators[0]} onRemoveElevator={onRemoveElevator} /> */}
			{/* {elevators.map((elevator) => {
				return <Cab elevator={elevator} onRemoveElevator={onRemoveElevator} />;
			})} */}
		</Foundation>
	);
}

export default MainShaft;
