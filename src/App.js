import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects.js';
import AddProject from './components/AddProject.js';
import uuid from 'uuid';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: [
        
      ]
    }
  }

  componentWillMount(){
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
      </div>
    );
  }
}

export default App;
