import React from 'react';

function Footer()
{
    const footerStyle = {
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            textAlign:"center",
                            background:"#282829",
                            height:"150px",
                            color:"#fff",
                            textDecoration:"none"
                        }

    return(
        <section>
            <div style={footerStyle} className="container-fluid">
                <h3 style={{textAlign:"center"}} id = "footer-text">
                    Credit to &nbsp;
                    <a target="_blank" href = "https://openweathermap.org/">OpenWeather (TM)</a>&nbsp;
                    For the Weather Data
                </h3>
            </div>
        </section>
    )
}

export default Footer