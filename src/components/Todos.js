import React, { Component } from 'react';
import Todo from './Todo'

class Todos extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return ( 
          <Todo key={todo.id} todo={todo} />
        )
      });
    }

    return (
      <div className="todos">
        <h3>My todos</h3>
        {todoItems}
      </div>
    );
  }
}

export default Todos;
