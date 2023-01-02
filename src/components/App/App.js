import { Component } from 'react';
import './App.css';
import Tricks from '../Tricks/Tricks';

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

  addNewTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick] })
  }

  render() {
    return (
      <div className="App">
        <h1 data-cy='header'>Sick Trick Wish List</h1>
        <ul>
          {this.state.tricks.map((trick, index) => {
            return <li data-cy={`trick-${index + 1}`}>stance: {trick.stance}, name: {trick.name}, obstacle: {trick.obstacle}, tutorial: {trick.tutorial}, id: {trick.id}</li>
          })}
        </ul>
        <Tricks addNewTrick={this.addNewTrick} tricksLength={this.state.tricks.length}/>
      </div>
    );
  }
}
export default App;