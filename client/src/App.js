import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    cars: []
  }

  componentDidMount() {
    axios.get('/api/getcars')
      .then(response => {
        this.setState({ cars: response.data })
      })
  }

  onSubmitCar() {
    axios.post('/api/addcar', {
      brand: 'Ford',
      model: 'Focus',
      year: 2000,
      avail: true
    })
      .then(response => {
        console.log(response.data)
      })
  }


  render() {
    return (
      <div className="App">
        <button
          onClick={() => this.onSubmitCar()}
        >
          Add car
        </button>
        {this.state.cars.map((car) => (
          <div> - {car.brand}</div>
        ))
        }
      </div>
    )
  }
}

export default App;