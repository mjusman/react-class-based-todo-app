import React from "react";
import { Component } from "react";
import styles from "../TodoItem.module.css";

class TodoItem extends Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };
  handleEditingDone = (event) => {
    if (event.key === "Enter") {
      this.setState({
        editing: false,
      });
    }
  };
  render() {
    const completedStyle = {
      fontStyle: "italic",
      opacity: 0.4,
      color: "#595959",
      textDecoration: "line-through",
    };
    const { id, title, completed } = this.props.todo;
    let editMode = {};
    let viewMode = {};
    if (this.state.editing) {
      viewMode.display = "block";
    } else {
      editMode.display = "none";
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={this.props.todo.complted}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <span style={completed ? completedStyle : null}>{title}</span>
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <input
            type="text"
            className={styles.inputText}
            value={title}
            style={editMode}
            onChange={(e) => this.props.setUpdateProps(e.target.value, id)}
            onKeyDown={this.handleEditingDone}
          />
        </div>
      </li>
    );
  }
}

export default TodoItem;
