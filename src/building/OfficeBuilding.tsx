import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addElevator, removeElevator } from "./actions";
import { Building, Elevator, Task } from "./interfaces";
import Cab from "./Cab";
//import Lobby from "./Lobby";
//import MainShaft from "./MainShaft";
//import Queue from "./Queue";
import { getElevators, getFloorCount, getMainQueue } from "./selectors";

const Foundation = styled.div`
	background-color: cyan;
	width: 80%;
	height: 90%;
	display: flex;
`;

interface Props {
	elevators: Elevator[];
	queue: Task[];
	floors: number;
	onCreateElevatorPressed: () => any;
	onRemoveElevator: (body: any) => any;
}

function OfficeBuilding({
	elevators,
	queue,
	floors,
	onCreateElevatorPressed,
	onRemoveElevator,
}: Props) {
	useEffect(() => {
		onCreateElevatorPressed();
		return () => {};
	}, [onCreateElevatorPressed]);
	const loadingMessage = (
		<div>
			Loading building...
			<button
				onClick={() => {
					onCreateElevatorPressed();
				}}
			>
				add new elevator!
			</button>
		</div>
	);
	const content = (
		<Foundation>
			<div style={{ border: "thick solid yellow" }}>
				<button
					onClick={() => {
						console.log("within officeBuilding: ", elevators, floors);
						onCreateElevatorPressed();
					}}
				>
					add new elevator!
				</button>
				{elevators.map((elevator) => (
					<Cab elevator={elevator} onRemoveElevator={onRemoveElevator} />
				))}
			</div>
		</Foundation>
	);
	return elevators !== undefined ? content : loadingMessage;
}

const mapStateToProps = (state: Building) => ({
	elevators: getElevators(state),
	queue: getMainQueue(state),
	floors: getFloorCount(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	onCreateElevatorPressed: () => dispatch(addElevator()),
	onRemoveElevator: (id: string) => dispatch(removeElevator(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OfficeBuilding);
