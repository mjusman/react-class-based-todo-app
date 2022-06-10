import React from "react";
import { Component } from "react";
import InputTodo from "./inputTodo";
import TodoLists from "./todoLists";
import {v4 as uuidv4} from "uuid";
import Header from "./header";

class TodoContainer extends Component {
  // state object which holds component data
  state = {
    todos: [
      {
        id: 1,
        title: "Radius",
        completed: false,
      },
      {
        id: 2,
        title: "Reading",
        completed: false,
      },
      {
        id: 3,
        title: "Recless",
        completed: false,
      },
      {
        id: 4,
        title: "Radio",
        completed: false,
      },
    ],
  };

  addTodoItem = (title) => {
    // add new todo item
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };
  handleDeleteTodo = (id) => {
    // handle deletion of todo item
    this.setState({
      todos: this.state.todos.filter((todo) => {
        if (todo.id === id) {
          return todo.id !== id;
        }
        return todo;
      }),
    });
  };
  handleChange = (id) => {
    // handle changeon check box
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        console.log(id);
        return todo;
      }),
    });
  };
  setUpdate = (updatedTodo, id) => {
    // handle update changes on todo
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTodo;
        }
        return todo;
      }),
    });
  };
  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodoLists
            todos={this.state.todos}
            deleteTodoProps={this.handleDeleteTodo}
            handleChangeProps={this.handleChange}
            setUpdateProps={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
 
export default TodoContainer;