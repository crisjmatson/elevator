import { createSelector } from "reselect";

export const getElevators = (state: any) => {
	//console.log("selector shaft ans: ", state.elevators.shafts);
	return state.elevators.shafts;
};
export const getMainQueue = (state: any) => {
	//console.log("selector queue ans: ", state.elevators.queue);
	return state.elevators.queue;
};
export const getFloorCount = (state: any) => {
	//console.log("floorcount ans: ", state.elevators.floors);
	return state.elevators.floors;
};
export const getStationary = createSelector(getElevators, (elevators) => {
	return elevators.filter((cab) => cab.direction === 1);
});
export const getAscending = createSelector(getElevators, (elevators) => {
	return elevators.filter((cab) => cab.direction === 2);
});
export const getDescending = createSelector(getElevators, (elevators) => {
	return elevators.filter((cab) => cab.direction === 3);
});
