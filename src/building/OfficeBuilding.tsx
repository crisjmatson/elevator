import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
	addElevator,
	addTask,
	removeElevator,
	assignMainTasks,
} from "./actions";
import Cab from "./Cab";
import { Elevator, Task } from "./interfaces";
import Request from "./Request";
import {
	getAscending,
	getDescending,
	getElevators,
	getFloorCount,
	getMainQueue,
	getStationary,
} from "./selectors";

const Foundation = styled.div`
	background-color: cyan;
	border: thick solid yellow;
	display: flex;
`;

const StyledQueue = styled.div`
	width: auto;
	height: auto;
	display: flex;
	flex-flow: row wrap;
	background-color: white;
`;
const StyledLobby = styled.div`
	width: auto;
	height: auto;
	/* display: flex;
	flex-flow: row wrap; */
	background-color: orange;
`;

interface propsEle {
	all: Elevator[];
	stationary: Elevator[];
	ascending: Elevator[];
	descending: Elevator[];
}

interface Props {
	elevators: propsEle;
	queue: Task[];
	floors: number;
	onCreateElevatorPressed: () => any;
	onRemoveElevator: (body: string) => any;
	onAddTask: () => any;
	assignTasksInMain: (queue: Task[], elevators: any) => any;
}

function OfficeBuilding({
	elevators,
	queue,
	floors,
	onCreateElevatorPressed,
	onRemoveElevator,
	onAddTask,
	assignTasksInMain,
}: Props) {
	useEffect(() => {
		onCreateElevatorPressed();
		return () => {};
	}, [onCreateElevatorPressed]);
	useEffect(() => {
		assignTasksInMain(queue, elevators);
		return () => {
			console.log("new useEffect fired");
		};
	}, [assignTasksInMain, queue, elevators]);
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
			<button>Next Move</button>
			<span>
				<h5>office building</h5>
				<button
					onClick={() => {
						console.log(elevators);
						onCreateElevatorPressed();
					}}
				>
					add new elevator!
				</button>
				<StyledQueue>
					{elevators.all.map((elevator) => {
						let index = elevators.all.indexOf(elevator);
						return (
							<Cab
								index={index + 1}
								elevator={elevator}
								onRemoveElevator={onRemoveElevator}
								key={elevator.id}
							/>
						);
					})}
				</StyledQueue>
			</span>
			<StyledLobby>
				<button onClick={() => onAddTask()}>add random request</button>
				{queue.map((task) => {
					return <Request task={task} key={task.id} />;
				})}
			</StyledLobby>
		</Foundation>
	);
	return elevators !== undefined ? content : loadingMessage;
}

const mapStateToProps = (state: any) => ({
	elevators: {
		all: getElevators(state),
		stationary: getStationary(state),
		ascending: getAscending(state),
		descending: getDescending(state),
	},
	queue: getMainQueue(state),
	floors: getFloorCount(state),
});

const mapDispatchToProps = (dispatch: any) => ({
	onCreateElevatorPressed: () => dispatch(addElevator()),
	onRemoveElevator: (id: string) => dispatch(removeElevator(id)),
	onAddTask: () => dispatch(addTask()),
	assignTasksInMain: (queue: Task[], elevators: Elevator[]) =>
		dispatch(assignMainTasks(queue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OfficeBuilding);
