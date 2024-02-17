import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import {FaGithub} from "react-icons/fa"

function Projects() {
    return (
        <div className='projects'>
            <Nav />
            <h1>Projects</h1>
            <div className='project-card-container'>
                <div className='card'>
                    <div id="img-1"><img alt="mansion" src="" /></div>
                    <h3>Clue Game</h3>
                    <button className='lang-button'>HTML</button> <button className='lang-button'>CSS</button> <button className='lang-button'>JavaScript</button>
                    <p>Browser game based on the popular board game Clue.</p>
                    <button className='repo-button' style={{color: '#F5FFFA'}}><FaGithub/><a href="https://github.com/ACatWalks/Clue-Game">Repo</a></button>
                </div>
                <div className='card'>
                    <div id="img-2"><img alt="teacher's desk" src="" /></div>
                    <h3>GradeSchool</h3>
                    <button className='lang-button'>MongoDB</button> <button className='lang-button'>Express</button> <button className='lang-button'>React</button> <button className='lang-button'>NodeJS</button> <button className='lang-button'>TypeScript</button>
                    <p>Web application that allows substitute teachers to rank and review school districts and individual school. </p>
                    <button className='repo-button' style={{color: '#F5FFFA'}}><FaGithub/><a href="https://github.com/ACatWalks/GradeSchool3">Repo</a></button>
                </div>
                <div className='card'>
                    <div id="img-3"><img alt="smiling doctors" src="" /></div>
                    <h3>HouseCalls</h3>
                    <button className='lang-button'>User authentication</button> <button className='lang-button'>React</button> <button className='lang-button'>MongoDB</button> <button className='lang-button'>SCSS</button>
                    <p>Web application that allows patients to report symptoms and chat with a doctor.</p>
                    <button className='repo-button' style={{color: '#F5FFFA'}}><FaGithub/><a href="https://github.com/ACatWalks/HouseCall-FE">Repo</a></button>
                </div>
                <div className='card'>
                    <div id="img-4"><img alt="hearts" src="" /></div>
                    <h3>My Perfect Date</h3>
                    <button className='lang-button'>React</button><button className='lang-button'>User authentication</button><button className='lang-button'>MongoDB</button>
                    <p>A simple dating site with a chat feature.</p>
                    <button className='repo-button' style={{color: '#F5FFFA'}}><FaGithub/><a href="https://github.com/ACatWalks/myperfectdate">Repo</a></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects
