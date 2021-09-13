import React from 'react';
import Header from './ComponentsOfPage/Header'
import Home from './ComponentsOfPage/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './ComponentsOfPage/About';
import IslamabadWeather from './ComponentsOfPage/WeatherDisplays/IslamabadWeather';
import KarachiWeather from './ComponentsOfPage/WeatherDisplays/KarachiWeather';
import PeshawarWeather from './ComponentsOfPage/WeatherDisplays/PeshawarWeather';
import LahoreWeather from './ComponentsOfPage/WeatherDisplays/LahoreWeather';
import QuettaWeather from './ComponentsOfPage/WeatherDisplays/QuettaWeather';
import GilgitWeather from './ComponentsOfPage/WeatherDisplays/GilgitWeather';
import MultanWeather from './ComponentsOfPage/WeatherDisplays/MultanWeather';
import FaisalabadWeather from './ComponentsOfPage/WeatherDisplays/FaisalabadWeather';
import SukkurWeather from './ComponentsOfPage/WeatherDisplays/SukkurWeather';
import JhelumWeather from './ComponentsOfPage/WeatherDisplays/JhelumWeather';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
            <Switch>
              <Route path = "/" exact component={Home} />
              <Route path = "/about" exact component={About} />
              <Route exact path = "/islamabad" component = {IslamabadWeather} />
              <Route exact path = "/karachi" component = {KarachiWeather} />
              <Route exact path = "/peshawar" component = {PeshawarWeather} />
              <Route exact path = "/lahore" component = {LahoreWeather} />
              <Route exact path = "/quetta" component = {QuettaWeather} />
              <Route exact path = "/gilgit" component = {GilgitWeather} />
              <Route exact path = "/multan" component = {MultanWeather} />
              <Route exact path = "/faisalabad" component = {FaisalabadWeather} />
              <Route exact path = "/sukkur" component = {SukkurWeather} />
              <Route exact path = "/jhelum" component = {JhelumWeather} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
