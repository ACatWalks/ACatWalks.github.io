import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import {FaEnvelope} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaFileDownload} from "react-icons/fa"

function Contact() {
    return (
        <div className='contact'>
            <Nav />
            <h1>Contact Me</h1>
            <ul>
                <li className="email"><span className='fa-icon'><FaEnvelope /></span><strong>Email</strong>:  <a href="mailto:acwoods314@gmail.com">acwoods314@gmail.com</a></li>
                <li className="github"><span className='fa-icon'><FaGithub /></span><strong>GitHub</strong>:     <a href="https://github.com/ACatWalks">https://github.com/ACatWalks</a></li>
                <li className="linkedin"><span className='fa-icon'><FaLinkedin /></span><strong>LinkedIn</strong>:   <a href="https://www.linkedin.com/in/amandacwoods/">https://www.linkedin.com/in/amandacwoods/</a></li>
                <li className="resume"><div className='resume-container'><span className='fa-icon'><FaFileDownload /></span><strong>Resume</strong>:     <button><a href="https://drive.google.com/file/d/1PE26OhotmfFHxcQUovIsUfP34lnSV3uI/view?usp=sharing" style={{color: '#F5FFFA'}} download>Download/Print</a></button></div></li>
            </ul>
            <Footer />
        </div>
    )
}

export default Contact