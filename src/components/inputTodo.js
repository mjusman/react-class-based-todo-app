import React from "react";
import { Component } from "react";

// Input todo component 
class InputTodo extends Component {
  state = {
    title: "",
  };
  
  handleSubmit = (e) => {
    // handles form submit
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Enter todo title fisrt");
    }
  };
  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Enter todo title"
          value={this.state.title}
          name="title"
          onChange={(e) => {
            this.setState({
              [e.target.name]: e.target.value,
            });
          }}
        />
        <input className="input-submit" type="submit" value="submit" />
      </form>
    );
  }
}

export default InputTodo;
