import React from 'react';
import Header from './ComponentsOfPage/Header'
import Home from './ComponentsOfPage/Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './ComponentsOfPage/About';
import IslamabadWeather from './ComponentsOfPage/ComponentsOfHome/WeatherDisplays/IslamabadWeather';
import KarachiWeather from './ComponentsOfPage/ComponentsOfHome/WeatherDisplays/KarachiWeather';
import PeshawarWeather from './ComponentsOfPage/ComponentsOfHome/WeatherDisplays/PeshawarWeather';
import LahoreWeather from './ComponentsOfPage/ComponentsOfHome/WeatherDisplays/LahoreWeather';
import QuettaWeather from './ComponentsOfPage/ComponentsOfHome/WeatherDisplays/QuettaWeather';
import GilgitWeather from './ComponentsOfPage/ComponentsOfHome/WeatherDisplays/GilgitWeather';
import MultanWeather from './ComponentsOfPage/ComponentsOfHome/WeatherDisplays/MultanWeather';
import FaisalabadWeather from './ComponentsOfPage/ComponentsOfHome/WeatherDisplays/FaisalabadWeather';
import SukkurWeather from './ComponentsOfPage/ComponentsOfHome/WeatherDisplays/SukkurWeather';
import JhelumWeather from './ComponentsOfPage/ComponentsOfHome/WeatherDisplays/JhelumWeather';
import Footer from './ComponentsOfPage/Footer';

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
          <Footer />
      </div>
    </Router>
  );
}

export default App;
