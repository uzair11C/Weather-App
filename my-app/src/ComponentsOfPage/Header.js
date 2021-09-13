import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Header(){

    const [cheader, setCheader] = useState(false);

    const changeOpacity = () =>{
            if(window.scrollY >= 100)
            {
                    setCheader(true)
            }
            else
            {
                    setCheader(false)
            }
    }
    
    window.addEventListener('scroll' , changeOpacity);

    return(
        <nav className={cheader ? "cheader active navbar navbar-expand-md" : "cheader navbar navbar-expand-md"}>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <i className="fas fa-bars"></i>
            </button>
                    
            <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'><h2>Home</h2></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to = '/about'><h2>About</h2></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header