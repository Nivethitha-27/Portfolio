import React from 'react'
import Navbar from '../components/Navbar'
import './Project.css'

function Project({ themeToggler }) {
  return (
    <>
      <Navbar themeToggler={themeToggler} />
      <div className='project'>
        <div className="card mb-3"
          style={{
            marginTop: "2%",
            marginLeft: "18%",
            width: "900px",
            borderRadius: "5px",

            boxShadow: "3px 3px 3px grey"
          }}>
          <img src="./images/Screenshot (315).png" className="card-img-top" alt="..." height="400" />
          <div className="card-body">
            <h5 className='card-title'><i>Train Express</i></h5>
            <span className="card-text" style={{ color: "black" }}>
              This a web application in which user can search trains and get the trains with its routes and also they can book
              their trains.
              <i>You can find both user and admin module here</i></span>
            <div className='tags'>
              <a href="https://trainexpress.netlify.app/" target="_blank">
                <button className='btn btn-sm btn-success'
                  style={{ borderRadius: "15px" }}
                >Demo</button></a>
              <button className='btn btn-sm'
                style={{
                  fontSize: "15px",
                  color: "black",
                  borderRadius: "25px",
                  fontFamily: "bold",
                  color: "darkblue"
                }} >React.js</button>

              <button className='btn btn-sm'
                style={{
                  backgroundColor: "",
                  fontSize: "15px",
                  color: "black",
                  borderRadius: "25px",
                  fontFamily: "bold",
                  color: "darkblue"
                }} >Node.js</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Project