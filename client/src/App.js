import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    cars: []
  }

  componentDidMount() {
    this.getCars()
  }


  getCars = () => {
    axios.get('/api/getcars')
      .then(response => {
        this.setState({ cars: response.data })
      })
  }

  onCarRemove = () => {
    axios.post('/api/removeCar', {
      brand: 'Ford'
    })
      .then(response => {
        this.getCars();
      })
  }

  onCarUpdate = () => {
    axios.post('/api/updateCar', {
      id: '5fd59708ddf9aa082b90247c',
      brand: 'Mazda'
    })
      .then(response => {
        this.getCars();
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
        <button
          onClick={() => this.onCarRemove()}
        >
          Remove car
        </button>
        <button
          onClick={() => this.onCarUpdate()}
        >
          Update car
        </button>
        <hr />
        {this.state.cars.map((car) => (
          <div> - {car.brand}</div>
        ))
        }
      </div>
    )
  }
}

export default App;