import React, {useState,useEffect} from 'react'

function FaisalabadWeather()
{
    const APIKey = "ebe14745763975c88eef43214014954f";

    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchWeather() ;
    } , []);

    const fetchWeather = async () => {
        const data = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=faisalabad&units=metric&appid=" + APIKey
            );
        const weather = await data.json();

        setWeather(weather);
        setLoading(false);
    } 

                const content = loading ? <div className="container-fluid loader">
                                            <h2>Please Wait</h2>
                                                <i className="fas fa-atom fa-spin"></i>
                                            <h2>Fetching Your Data</h2>
                                        </div> 
                                        : 
                        <div style={
                        {
                            backgroundColor:"rgba(43, 42, 42, 0.575)",
                            width:"100%",
                            height:"100%",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center"
                        }
                    } className="container-fluid">
                <div style={
                        {
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center",
                            alignItems:"center"
                        }
                    } className="col-sm-12">

                    <h2 id="city">Faisalabad</h2>

                    <h2 id="temp">{weather?.main && Math.round(weather.main.temp)}°C</h2>
                    
                    {weather?.weather && weather.weather.map(weather => (
                        <h2 key={weather.id} id="weather">{weather.main}</h2>
                    ))}
                </div>
            </div>

            return(
                <section
                className =
                {
                    weather?.weather && weather.weather[0].main == 'Clear' 
                    ? 
                        'w-d-p-clear' 
                    : 
                    weather?.weather && weather.weather[0].main == 'Haze'
                    ?
                        'w-p-d-haze'
                    :
                    weather?.weather && weather.weather[0].main == 'Drizzle'
                    ?
                        'w-d-p-drizzle'
                    :
                    weather?.weather && weather.weather[0].main == 'Clouds'
                    ?
                        'w-d-p-clouds'
                    :
                    weather?.weather && weather.weather[0].main == 'Snow'
                    ?
                        'w-d-p-snow'
                    :
                    weather?.weather && weather.weather[0].main == 'Thunderstorm'
                    ?
                        'w-d-p-thunderstorm'
                    :
                    weather?.weather && weather.weather[0].main == 'Rain'
                    ?
                        'w-d-p-rain'
                    :
                    weather?.weather && weather.weather[0].main == 'Fog'
                                             || 
                    weather?.weather && weather.weather[0].main == 'Mist'
                    ?
                        'w-d-p-foggy'
                    :
                    weather?.weather && weather.weather[0].main == 'Dust'
                    ?
                        'w-d-p-dust'
                    :
                    weather?.weather && weather.weather[0].main == 'Haze'
                    ?
                        'w-d-p-haze'
    
                    :'w-d-p'
                }>
                {content}
            </section>
            )
}

export default FaisalabadWeather