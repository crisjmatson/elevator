export interface Building {
	queue: Task[];
	shafts: Elevator[];
	floors: number;
}

export interface Task {
	id: string;
	status: string;
	count: number;
	floorCurrent: number;
	floorRequested: number;
	floorDelivered: number;
	start: Date;
	end: Date;
}

export interface Elevator {
	id: string;
	countWithin: number;
	capacity: number;
	floorCurrent: number;
	direction: "up" | "down" | "stationary";
	stack: Task[];
}
