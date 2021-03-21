import { ADD_ELEVATOR, REMOVE_ELEVATOR, ADD_FLOOR_REQUEST } from "./actions";
import { Building, Elevator } from "./interfaces";
const initialState: Building = {
	queue: [],
	shafts: [],
	floors: 20,
};
export const elevators = (state: Building = initialState, action: any) => {
	const mainShaft = state.shafts;
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
				shafts: [...mainShaft.concat(newElevator)],
				floors: floors,
			};
		}
		case REMOVE_ELEVATOR: {
			return {
				queue: [...queue],
				shafts: mainShaft.filter((cab) => cab.id !== body),
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
				shafts: [...mainShaft],
				floors: floors,
			};
		}
	}
	return state;
};
