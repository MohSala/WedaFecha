import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API = "7ffb483eeb385f4f7fc7c51c6dac01f7";

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;


    const API_C = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API}`);
    const data = await API_C.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <p>Hey welcome</p>

        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
