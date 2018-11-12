import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects.js'
import AddProject from './components/AddProject.js'

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
        title: "Business Website",
        category: "Web Design"
      },
      {
        title: "Social Application",
        category: "Mobile Development"
      },
      {
        title: "ECommerce Shopping Cart",
        category: "Web Development"
      }
    ]})
  }

  handleAddProject(project){
    console.log(project)
  }

  render() {
    return (
      <div className="App">
        <h1>My Project Manager</h1>
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
