import * as React from 'react'

interface State {
	currentTask: string
	tasks: Array<Task>
}

interface Task {
	id: number
	value: string
	completed: boolean
}

class TodoForm extends React.Component<{}, State> {
	state = {
		currentTask: "",
		tasks: new Array<Task>()
	}

	_timeInMilliseconds = (): number => Date.now()

	handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		this.setState(prevState => ({
			currentTask: "",
			tasks: [
				...prevState.tasks,
				{
					id: this._timeInMilliseconds(),
					value: prevState.currentTask,
					completed: false
				}
			]
		}))
	}

	deleteTask = (index: number): void => {
		const tasks: Array<Task> = this.state.tasks.filter((task: Task): boolean => task.id !== index)
		this.setState({ tasks })
	}

	toggleDone = (id: number): void => {
		let taskIndex: number = -1
		const task: Task = this.state.tasks.filter((task: Task, index: number): boolean => {
			if (task.id === id) {
				taskIndex = index
				return true
			}

			return false
		})[0]
		task.completed = !task.completed

		const newTasks: Array<Task> = this.state.tasks
		newTasks[taskIndex] = task

		this.setState({ tasks: newTasks })
	}

	render(): JSX.Element {
		return (
			<div>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<input 
						className="tdl-input"
						type="text"
						value={this.state.currentTask}
						placeholder="todo..."
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ currentTask: e.target.value })}
					/>
					<button type="submit">Add Task</button>
				</form>
				<section>
					<ul>
						{this.state.tasks.map((task: Task) => (
							<li className={`tdl-task ${task.completed && 'is-completed'}`} key={task.id}>
								<p>
									<span>{task.value}</span>
									<button onClick={(): void => this.deleteTask(task.id)}>Delete</button>
									<button onClick={(): void => this.toggleDone(task.id)} >{task.completed ? 'Undo' : 'Done'}</button>
								</p></li>
						))}
					</ul>
				</section>
			</div>
		)
	}
}

export default TodoForm