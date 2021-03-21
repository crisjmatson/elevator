import { Task } from "./interfaces";

interface Props {
	task: Task;
}

function Request({ task }: Props) {
	return (
		<div>
			<span>{task.id}</span>
			<button onClick={() => console.log(task)}>REQLOG</button>
			<hr />
		</div>
	);
}

export default Request;
