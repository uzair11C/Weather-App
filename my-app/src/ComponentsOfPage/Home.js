import React from 'react'
import HomeBanner from './ComponentsOfHome/HomeBanner'
import WeatherBoxes from './ComponentsOfHome/WeatherBoxes'
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function Home(){
    return(
        <section>
            <HomeBanner />
                <WeatherBoxes />
        </section>
    )
}

export default Home