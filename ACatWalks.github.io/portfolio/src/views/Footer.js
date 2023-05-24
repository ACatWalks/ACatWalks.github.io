import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"

function Footer() {
    return (
        <div className='footer'>
            <ul className='foot-tabs'>
                <li><Link to="/"style={{color: '#F5FFFA'}}>About Me</Link></li>
                <li><Link to="/projects"style={{color: '#F5FFFA'}}>Projects</Link></li>
                <li><Link to="/contact" style={{color: '#F5FFFA'}}>Contact</Link></li>
            </ul>
            <ul className='social-media'>
                <li><a href="https://github.com/ACatWalks" style={{color: '#F5FFFA'}}><FaGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/amandacwoods/" style={{color: '#F5FFFA'}}><FaLinkedin /></a></li>
            </ul>
            <p className='copyright' style={{color: '#F5FFFA'}}>©2022 Amanda C. Woods</p>
            <Outlet />
        </div>
    )
}

export default Footer