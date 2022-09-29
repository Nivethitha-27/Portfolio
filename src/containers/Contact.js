import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './Contact.css';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bd9b4u5', 'template_gzp84na', form.current, 'HFGl1H-Kvci1kXnez')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <Navbar />
      <div className='contact'>
        {/* linkedin */}
        <div className='content-box' style={{ float: "left", marginTop: "9%", marginLeft: "-5%" }}>
          <div class="card1"
            style={{
              width: "18rem",
              height: "167px",
              boxShadow: "5px 5px 5px grey",
              marginLeft:"85%"

            }}>
            <div class="card-body">
              <a href="https://www.linkedin.com/in/nivethitha-selvaraj-43749095/" target="_blank"
                style={{
                  textDecoration: "none",

                }}>
                <img src='./images/174857.png' height="70" width="70"
                  style={{ marginLeft: "35%" }} /><br /><br />
                <p class="card-text"
                  style={{
                    textAlign: "center"
                  }}>Nivethitha
                </p></a>
            </div>
          </div>
          {/* twitter */}
          <div class="card2"
            style={{
              width: "18rem",
              height: "166px",
              marginTop: "4%",
              marginLeft:"85%",
              boxShadow: "5px 5px 5px grey"
            }}>
            <div class="card-body">
              <a href="https://twitter.com/NiveThilipan" target="_blank"
                style={{
                  textDecoration: "none"
                }}>
                <img src='./images/images (3).png' height="80" width="100"
                  style={{ marginLeft: "27%" }} /><br /><br />
                <p class="card-text"
                  style={{ textAlign: "center" }}>NiveThilipan
                </p></a>
            </div>
          </div>
        </div>
        <br /><br /><br />
        {/* mail */}
        <div className='mail'
          style={{ float: "left", marginLeft: "35%" }} >
          <h5
            style={{
              textAlign: "center",
              color: "darkblue",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontWeight: "bold"
            }}>Get In Touch</h5>
          <span
            style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "20px" }}>
            <i> If you want to contact or have any questions, opportunities,<br />or might
              simply want to say hello then, feel free to fill out <br />my contact form and
              I'll without a doubt<br /> hit you up in a hurry.</i></span>
        </div>
        <div className='card'
          style={{
            width: "600px",
            float: "right",
            marginRight: "15%",
            marginTop: "3%"
          }}><br />
          {/* mail form */}
          <form ref={form} className='form'
            onSubmit={sendEmail}
            style={{
              float: "right",
              marginLeft: "4%",
              marginRight: "5%"
            }}>
            <div class="mb-3 row">
              <label for="name" class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="user_name" name="user_name" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="email" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="user_email" name="user_email" />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="message" class="col-sm-2 col-form-label">Message</label>
              <div class="col-sm-10">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div><br />
            <button type="submit" value="send" className='btn btn-md btn-primary'
              style={{
                borderRadius: "13px",
                marginLeft: "45%"
              }}
            >Contact</button><br /><br />
          </form>
        </div>
      </div>

    </>
  )
}

export default Contact



