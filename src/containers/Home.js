import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Home.css'
function Home() {
  return (
    <>
      <Navbar />
      <div className='home'>
        <div className='about'>
          <img className="image" src='./images/full-stack-development.gif'
            style={{
              borderRadius: "20px"
            }} />
        </div>
        <br />
        <div className='info'>
          <h3 style={{ fontSize: "27px", color: "darkblue" }}>Hi! I'm <b>Nivethitha</b></h3>
          <span style={{ fontSize: "20px" }}><i>Welcome to my digital corner where you can find my works.</i>
            <br />I'm a engineering graduate
            <br />
            I’m super passionate about designing and webdevelopment.
            <br />
            <span>You can check My Resume here</span><br /><br />
            < a href="./images/resume final.pdf" target="_blank">
              <button className='btn btn-danger'
                style={{
                  borderRadius: "20px"
                }}>Resume</button></a>
          </span>
        </div>
      </div>
    </>
  )
}

export default Home