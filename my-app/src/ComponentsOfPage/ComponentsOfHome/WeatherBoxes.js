import React from 'react'
import {Link} from 'react-router-dom'

function WeatherBoxes(){
    return(
        <section id="w-b-s">
            <div className="container-fluid">
                <div className="col-sm-12">
                    <div style={{textAlign: "center",width:"100%"}} className="row">
                        <h2 style={{
                            textAlign: "center",
                            width:"100%",
                            marginBottom:"30px"}} className="city-choose">
                            Choose the city for current weather
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div className="w-box">
                                <div className="box-label">
                                    <Link to = "/islamabad"><h2>Islamabad</h2></Link>
                                </div>
                                <img src='https://mosqpedia.org/img/cache/largeimage/hkqaPdO0HuPiLzj7Cu4iQaoNhvzpNhd7Gzc2gbBp' alt='fm'/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div className="w-box">
                                <div className="box-label">
                                    <h2>Karachi</h2>
                                </div>
                                <img src = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Jinnah_Mausoleum.JPG' alt='mq'/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div className="w-box">
                                <div className="box-label">
                                    <h2>Peshawar</h2>
                                </div>
                                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Khyber_pass.jpeg/220px-Khyber_pass.jpeg' alt='pesh'/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div className="w-box">
                                <div className="box-label">
                                    <h2>Lahore</h2>
                                </div>
                                <img src = 'https://images.mapsofworld.com/allwonders/minar-e-pakistan.jpg' alt='mp'/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div className="w-box">
                                <div className="box-label">
                                    <h2>Quetta</h2>
                                </div>
                                <img src = 'https://balochistan.gov.pk/wp-content/uploads/2019/05/explore-sample.jpg' alt='zr'/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div className="w-box">
                                <div className="box-label">
                                    <h2>Gilgit</h2>
                                </div>
                                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Gilgit_City_a_View_from_Gilgit_serena_hotel.jpg/270px-Gilgit_City_a_View_from_Gilgit_serena_hotel.jpg' alt='gil'/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div className="w-box">
                                <div className="box-label">
                                    <h2>Multan</h2>
                                </div>
                                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Tomb_of_Shah_Rukn-e-Alam_Multan.jpg/220px-Tomb_of_Shah_Rukn-e-Alam_Multan.jpg' alt='mult'/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div className="w-box">
                                <div className="box-label">
                                    <h2>Faisalabad</h2>
                                </div>
                                <img src = 'https://1.bp.blogspot.com/-BGhe3DmFUnA/YQggTEZSqCI/AAAAAAAABsg/n66RkQzXeS4XQjj9g86Lflb_ZnBFITkcgCLcBGAsYHQ/s2000/Faisalabad.jpg' alt='faisl'/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div className="w-box">
                                <div className="box-label">
                                    <h2>Sukkur</h2>
                                </div>
                                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Rohri.jpg/270px-Rohri.jpg' alt='sukkur'/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 bcon">
                            <div className="w-box">
                                <div className="box-label">
                                    <h2>Jhelum</h2>
                                </div>
                                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Jhelum_River_Bridge.JPG/220px-Jhelum_River_Bridge.JPG' alt='jhelum'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeatherBoxes