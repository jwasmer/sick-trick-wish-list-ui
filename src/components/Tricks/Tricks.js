import { Component } from 'react'

class Tricks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: '',
      id: this.props.tricksLength + 1
    }
  }

  updateInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitNewTrick = event => {
    event.preventDefault()
    const newTrick = this.state
    this.props.addNewTrick(newTrick)
  }

  render() {
    return(
    <>
      <label htmlFor='name'>Pick a name: </label>
      <input data-cy='new-trick-name' name='name' type='text' value={this.state.name} onChange={this.updateInput}></input>
      <div>
        <label htmlFor='stance'>Choose a stance: </label>
        <select data-cy='new-trick-stance' name='stance' onChange={this.updateInput}>
          <option value='regular'>Regular</option>
          <option value='switch'>Switch</option>
        </select>
      </div>
      <div>
        <label htmlFor='obstacle'>Choose an obstacle: </label>
        <select data-cy='new-trick-obstacle' name='obstacle' onChange={this.updateInput}>
          <option value='flatground'>Flat ground</option>
          <option value='ledge'>Ledge</option>
          <option value='rail'>Rail</option>
          <option value='stairs'>Stairs</option>
          <option value='pool'>Pool</option>
        </select>
      </div>
      <label htmlFor='tutorial'>Tutorial Link: </label>
      <input data-cy='new-trick-tutorial' name='tutorial' type='text' value={this.state.tutorial} onChange={this.updateInput}></input>
      <button data-cy='new-trick-submit' onClick={this.submitNewTrick}>SEND IT</button>
    </>
    )
  }
}

export default Tricks;