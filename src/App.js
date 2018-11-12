import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects.js';
import AddProject from './components/AddProject.js';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './components/Todos.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: [
        
      ],
      todos: []
    }
  }

  getTodos(){
    //Where we want to make our request
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state)
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })

  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: "Business Website",
        category: "Web Design"
      },
      {
        id: uuid.v4(),
        title: "Social Application",
        category: "Mobile Development"
      },
      {
        id: uuid.v4(),
        title: "ECommerce Shopping Cart",
        category: "Web Development"
      }
    ]})
    this.getTodos();
  }

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project)
    this.setState({projects: projects})
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.find(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects})
  }

  render() {
    return (
      <div className="App">
        <h1>My Project Manager</h1>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr  />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
