import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div><h1>The header</h1>
            <Link to='/'>
            <h2>Home</h2>
            </Link>

            <Link to = '/about'>
            <h2>About</h2>
            </Link>
        </div>
    )
}

export default Header