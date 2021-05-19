import React from 'react'

const TodoItem = ({todo, onDelete}) => {
	return (
		<>
		<div>
			<h4><strong>{todo.title}</strong></h4>
			<p><i>{todo.desc}</i></p>
			<button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
		</div>
		<hr/>
		</>
	)
}

export default TodoItem