//import { createSelector } from "reselect";
//import { Building } from "./interfaces";

//export const getTodos = state => state.todos.data;
//export const getTodosLoading = state => state.todos.isLoading;

export const getElevators = (state: any) => {
	console.log("selector shaft ans: ", state.elevators.shafts);
	return state.elevators.shafts;
};
export const getMainQueue = (state: any) => {
	console.log("selector queue ans: ", state.elevators.queue);
	return state.elevators.queue;
};
export const getFloorCount = (state: any) => {
	console.log("floorcount ans: ", state.elevators.floors);
	return state.elevators.floors;
};

/* export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
); */

/* export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
); */
