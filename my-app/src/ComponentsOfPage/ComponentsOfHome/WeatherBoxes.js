import React from 'react'

function WeatherBoxes(){
    return(
        <section id="w-b-s">
            <div id="w-b-d">
                <div style={{width:"100%",height:"100%",backgroundColor:"gray",margin:"0"}} className="row">
                    <div style={{width:"100%",height:"auto",backgroundColor:"blue"}} className="w-c col-lg-6 col-md-12 col-sm-12">
                        <div className="w-boxes"></div>
                        <div className="w-boxes"></div>
                    </div>
                    <div style={{width:"100%",height:"auto",backgroundColor:"red"}} className="w-c col-lg-6 col-md-12 col-sm-12"></div>
                </div>
            </div>
        </section>
    )
}

export default WeatherBoxes