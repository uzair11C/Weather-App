import React from 'react'
import HomeBanner from './ComponentsOfHome/HomeBanner'
import WeatherBoxes from './ComponentsOfHome/WeatherBoxes'

function Home(){
    return(
        <section>
            <HomeBanner />
            <WeatherBoxes />
        </section>
    )
}

export default Home