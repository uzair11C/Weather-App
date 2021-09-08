import React from 'react'
import HomeBanner from './ComponentsOfHome/HomeBanner'
import WeatherBoxes from './ComponentsOfHome/WeatherBoxes'
import WeatherDisplay from './ComponentsOfHome/WeatherDisplay';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Home(){
    return(
        <section>
            <HomeBanner />
                <WeatherBoxes />
                <Route exact path = "/islamabad" component = {WeatherDisplay}/>
        </section>
    )
}

export default Home