import React from 'react'
import Navbar from '../components/Navbar'
import './About.css'

function About() {
  return (
    <>
      <Navbar />
      <div className='box'>
        <div className="card mb-3" style={{
          textAlign: "center",
          marginTop: "7%",
          width: "60%",
          marginLeft: "20%",
          border: "0",
          boxShadow: "5px 5px 10px pink",

        }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img src="./images/elegant-business-woman-portrait-vector-24508305.jpg" className="img-fluid rounded-start" alt="..." style={{ height: "440px" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title"><i>I Completed my engineering in Electrical Department</i></h3><br />
                <span className="card-text">
                  <ul>
                    <li>Dedicated to creating and optimizing interactive, user-friendly and feature-rich web applications</li>
                    <li>  Exposure to Front-end & Back-end web development, UI/UX design.</li>
                    <li>New and open source web technologies  make me super excited and I can’t wait to see what is to come of the web in the next few years.</li>
                    <li>
                      Believe that continuous learning and belief are the key factors for achieving personal and professional success.</li>
                    <li> Have the desire to learn and develop something new, as well as adhere to the rule<i> "Good code is beautiful code"</i> and try to follow all standards of the modern development process.</li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About