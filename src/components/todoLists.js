import React from "react";
import { Component } from "react";
import TodoItem from "./todoItem";

class TodoLists extends Component {
    state = {  } 
    render() { 
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodoProps={this.props.deleteTodoProps}
                    handleChangeProps={this.props.handleChangeProps}
                    setUpdateProps={this.props.setUpdateProps}
                    />
                ))}
            </ul>
        );
    }
}
 
export default TodoLists;