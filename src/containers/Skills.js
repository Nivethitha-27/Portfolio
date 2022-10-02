import React from 'react'
import Navbar from "../components/Navbar"
import './Skills.css';

function Skills({themeToggler}) {
  return (
    <>
      <Navbar themeToggler={themeToggler} />
      <div className='inner'>
        <div className='header'>
          <h3 color='darkblue'
            style={{
              marginTop: "-3%",
              fontSize: "22px"
            }}><i>My skills</i></h3>
        </div>
        <div className='content'>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/html5-display.png"
                  className="skill-icon"
                  style={{ height: "100px", width: "100px" }} />
              </div><br />
              <h4>HTML</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/c221f800-2674-11eb-9782-d802dc0e8cbb.png"
                  className="skill-icon"
                  style={{ height: "100px", width: "100px" }} />
              </div><br />
              <h4>CSS</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/bootstrap-logo-768x768.png"
                  className="skill-icon"
                  style={{ height: "100px", width: "100px" }} />
              </div><br />
              <h4>Bootstrap</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/javascript-logo-transparent-logo-javascript-images-3.png"
                  className="skill-icon"
                  style={{ height: "100px", width: "150px" }} />
              </div><br />
              <h4>JavaScript</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/1174949_js_react js_logo_react_react native_icon.png"
                  className="skill-icon"
                  style={{ height: "100px" }} />
              </div><br />
              <h4>React</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/node-js-emblem-vector-28501403.jpg"
                  className="skill-icon"
                  style={{ height: "100px" }} />
              </div><br />
              <h4>Node js</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/express-js-icon.png"
                  className="skill-icon"
                  style={{ height: "50px" }} />
              </div><br />
              <h4>Express js</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/images.png"
                  className="skill-icon"
                  style={{ height: "100px" }} />
              </div><br />
              <h4>My Sql</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/MongoDB-Emblem.jpg"
                  className="skill-icon"
                  style={{ height: "80px" }} />
              </div><br />
              <h4>MongoDB</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/AWS-logo-2.jpg"
                  className="skill-icon"
                  style={{ height: "100px", width: "120px" }} />
              </div><br />
              <h4>AWS</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/56676773cb4f0c00d7d47c6a84b9407c.jpg"
                  className="skill-icon"
                  style={{ height: "150px", width: "120px" }} />
              </div><br />
              <h4>Figma</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/Postman-featured-2100x1200.jpg"
                  className="skill-icon"
                  style={{ height: "100px", width: "100px" }} />

              </div><br />
              <h4>Postman</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/netlify-logo-png-transparent.png"
                  className="skill-icon"
                  style={{ height: "50px", width: "60px" }} />
              </div><br />
              <h4>Netlify</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/images (1).png"
                  style={{ height: "65px", width: "60px" }}
                  className="skill-icon" />
              </div><br />
              <h4>Heroku</h4>
            </div>
          </div>
          <div className='skill-box'>
            <div className='skill-title'>
              <div className='img'>
                <img src="./images/GitHub-Mark.png"
                  className="skill-icon"
                  style={{ height: "80px" }} />
              </div><br />
              <h4>GitHub</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills