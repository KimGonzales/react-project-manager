import React, { Component } from 'react';

class Todo extends Component {
  deleteTodo(id){
    this.props.onDelete(id)
  }
  render() {
    
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong> - {this.props.todo.completed}
      </li>
    );
  }
}

export default Todo;
