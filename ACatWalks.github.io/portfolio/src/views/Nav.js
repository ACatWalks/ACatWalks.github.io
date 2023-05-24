import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Nav() {
    return (
        <div className='nav'>
            <ul>
                <div className="my-title">
                    <li><Link to="/" style={{color: '#F5FFFA'}}>Amanda C. Woods</Link></li>
                </div>
                <div className="tabs">
                    <li><Link to="/" style={{color: '#F5FFFA'}}>About Me</Link></li>
                    <li><Link to="/projects" style={{color: '#F5FFFA'}}>Projects</Link></li>
                    <li><Link to="/contact" style={{color: '#F5FFFA'}}>Contact</Link></li>
                    <li><a href="https://github.com/ACatWalks" style={{color: '#F5FFFA'}}>GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/amandacwoods/" style={{color: '#F5FFFA'}}>LinkedIn</a></li>
                </div>
            </ul>
            <Outlet />
        </div>
    )
}

export default Nav