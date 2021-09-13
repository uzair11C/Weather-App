import React, {useState,useEffect} from 'react'

function PeshawarWeather()
{
    const APIKey = "ebe14745763975c88eef43214014954f";

    const [weather, setWeather] = useState([]);

    useEffect(() => {
        fetchWeather() ;
    } , []);

    const fetchWeather = async () => {
        const data = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=peshawar&units=metric&appid=" + APIKey
            );
        const weather = await data.json();

        setWeather(weather);
    } 

    return(
        <section id="w-d-p">
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

                    <h2 id="city">Peshawar</h2>

                    <h2 id="temp">{weather?.main && Math.floor(weather.main.temp)}°C</h2>
                    
                    {weather?.weather && weather.weather.map(weather => (
                        <h2 key={weather.id} id="weather">{weather.main}</h2>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PeshawarWeather