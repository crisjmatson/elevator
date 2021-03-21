//import { Task, Elevator } from "./interfaces";

export const ADD_ELEVATOR = "ADD_ELEVATOR";
export const addElevator = () => ({
	type: ADD_ELEVATOR,
});
export const REMOVE_ELEVATOR = "REMOVE_ELEVATOR";
export const removeElevator = (request: string) => ({
	type: REMOVE_ELEVATOR,
	body: request,
});

//--------------------------------------------------------------
/* 
export const ADD_FLOOR_REQUEST = "ADD_FLOOR_REQUEST";
export const addTask = (request: Task) => ({
	type: ADD_FLOOR_REQUEST,
	body: { request },
});
export const COMPLETE_FLOOR_REQUEST = "COMPLETE_FLOOR_REQUEST";
export const completeTask = (request: Task) => ({
	type: COMPLETE_FLOOR_REQUEST,
	body: { request },
});
export const CANCEL_FLOOR_REQUEST = "CANCEL_FLOOR_REQUEST";
export const cancelTask = (request: Task) => ({
	type: CANCEL_FLOOR_REQUEST,
	body: { request },
});
 */
