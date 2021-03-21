import { ADD_ELEVATOR, REMOVE_ELEVATOR } from "./actions";
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
	switch (type) {
		case ADD_ELEVATOR: {
			let newElevator: Elevator = {
				id: Math.random().toString(36).substr(2, 9),
				countWithin: 0,
				capacity: 20,
				floorCurrent: 0,
				direction: "stationary",
				stack: [],
			};
			console.log("====================================");
			console.log({ INITIAL_STATE_IN_REDUCER: state }, newElevator, mainShaft);
			console.log("====================================");
			return {
				queue: [...queue],
				shafts: [...mainShaft.concat(newElevator)],
				floors: floors,
			};
		}
		case REMOVE_ELEVATOR: {
			return {
				queue: [...queue],
				shafts: mainShaft.filter((cab) => cab.id !== action.body),
				floors: floors,
			};
		}
	}
	return state;
};
