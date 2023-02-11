import React, { useState } from 'react'
import TodoItem from '../item/TodoItem'
import CreateTodoField from '../todo input/CreateTodoField'

const data = [
	{
		_id: 'wdas21sa',
		title: 'Learn React',
		isCompleted: false,
	},
	{
		_id: 'ws21sa',
		title: 'Keep learning react and his libraries',
		isCompleted: false,
	},
	{
		_id: 'wdaswhfsa',
		title: 'Cerate cool react project',
		isCompleted: false,
	},
]

const Home = () => {
	const [todo, setTodo] = useState(data)

	const changeTodo = id => {
		const copy = [...todo]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodo(copy)
	}

	const removeTodo = id => setTodo([...todo].filter(t => t._id !== id))

	return (
		<div className="text-white w-4/5 mx-auto">
			<h1 className="text-2xl font-bold text-center mb-10">Todo App</h1>
			{todo.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				/>
			))}

			<CreateTodoField setTodo={setTodo} />
		</div>
	)
}

export default Home
