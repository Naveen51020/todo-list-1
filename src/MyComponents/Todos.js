import React from 'react'
import TodoItem from "./TodoItem";

const Todos = (props) => {
	let mystyle = {
		minHeight: "70vh",
		margin: "10px auto"
	}
	return (
		<div className="container my-3" style={mystyle}>
			<h3 className="my-3">Todos List</h3>
			{props.todos.length === 0 ? "No todos to Display" :
				props.todos.map((todo)=>{
					return (<TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/>)
				})
			}
			
		</div>
	)
}

export default Todos