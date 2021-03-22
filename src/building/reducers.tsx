import {
	ADD_ELEVATOR,
	REMOVE_ELEVATOR,
	ADD_FLOOR_REQUEST,
	ASSIGN_FROM_MAIN,
} from "./actions";
import { Building, Elevator, SortedEle, Assignment } from "./interfaces";
const initialState: Building = {
	queue: [],
	shafts: [],
	floors: 20,
};
export const elevators = (state: Building = initialState, action: any) => {
	const mainShaft: SortedEle = {
		all: state.shafts,
		stationary: state.shafts.filter((cab) => cab.direction === 1),
		ascending: state.shafts.filter((cab) => cab.direction === 2),
		descending: state.shafts.filter((cab) => cab.direction === 3),
	};
	const queue = state.queue;
	const floors = state.floors;
	const type = action.type;
	const body = action.body ? action.body : null;
	switch (type) {
		case ADD_ELEVATOR: {
			let newElevator: Elevator = {
				id: Math.random().toString(36).substr(2, 9),
				countWithin: 0,
				capacity: 20,
				floorCurrent: 0,
				direction: 1,
				stack: [],
			};
			return {
				queue: [...queue],
				shafts: [...mainShaft.all.concat(newElevator)],
				floors: floors,
			};
		}
		case REMOVE_ELEVATOR: {
			return {
				queue: [...queue],
				shafts: mainShaft.all.filter((cab) => cab.id !== body),
				floors: floors,
			};
		}
		case ADD_FLOOR_REQUEST: {
			let randomTask = {
				id: Math.random().toString(36).substr(2, 12),
				status: 1,
				count: Math.floor(Math.random() * 6) + 1,
				floorCurrent: Math.floor(Math.random() * 20),
				floorRequested: Math.floor(Math.random() * 20),
				floorDelivered: null,
				start: new Date(),
				end: null,
			};
			let sorted = queue.concat(randomTask).sort((a: any, b: any) => {
				return b.start - a.start;
			});
			return {
				queue: [...sorted],
				shafts: [...mainShaft.all],
				floors: floors,
			};
		}
		case ASSIGN_FROM_MAIN: {
			let elevatorAssignments: Assignment[] = [];
			queue.forEach((task) => {
				if (mainShaft.stationary.length > 0) {
					let goal: number = floors + 1;
					let bestFit = mainShaft.stationary[0];
					mainShaft.stationary.map((cab) => {
						if (Math.abs(task.floorCurrent - cab.floorCurrent) < goal) {
							goal = Math.abs(task.floorCurrent - cab.floorCurrent);
							bestFit = cab;
							console.log({ newFit: bestFit, cab: cab });
						}
					});
					console.log(bestFit);
					return console.log("best Fit: ", bestFit);
				}
			});
			return elevatorAssignments.length > 0
				? {
						queue: [...queue],
						shafts: [...mainShaft.all],
						floors: floors,
				  }
				: {
						queue: [...queue],
						shafts: [...mainShaft.all],
						floors: floors,
				  };
		}
	}
	return state;
};
