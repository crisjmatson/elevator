export interface StateBuilding {
	elevators: Building;
}
export interface Building {
	queue: Task[];
	shafts: Elevator[];
	floors: number;
}
export enum Status {
	inProgress,
	Complete,
	Cancelled,
}
export interface Task {
	id: string;
	status: Status;
	count: number;
	floorCurrent: number;
	floorRequested: number;
	floorDelivered: number | null;
	start: Date;
	end: Date | null;
}

export enum Direction {
	Stationary,
	Up,
	Down,
}

export interface Elevator {
	id: string;
	countWithin: number;
	capacity: number;
	floorCurrent: number;
	direction: Direction;
	stack: Task[];
}
