import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tricks')
        .then(response => response.json())
        .then(data => {
          this.setState({
            tricks: data
          })
        })
    }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <ul>
          {this.state.tricks.map(trick => {
            return <li>stance: {trick.stance}, name: {trick.name}, obstacle: {trick.obstacle}, tutorial: {trick.tutorial}, id: {trick.id}</li>
          })}
        </ul>
      </div>
    );
  }
}
export default App;