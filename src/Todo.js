import React from 'react'
import todoList from './TodoList'
import Todo from './Todo'

export default function Todo({ todo }) {
    return (
       todos.map(todo => {
           return <Todo todo={todo} />
       })
    )
}
