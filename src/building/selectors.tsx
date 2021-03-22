import { createSelector } from "reselect";

export const getElevators = (state: any) => {
	return state.elevators.shafts;
};
export const getMainQueue = (state: any) => {
	return state.elevators.queue;
};
export const getFloorCount = (state: any) => {
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
