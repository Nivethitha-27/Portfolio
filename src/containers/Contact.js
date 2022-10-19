import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import './Contact.css';


function Contact({themeToggler}) {
  const form = useRef();
  const navigate = useNavigate(); const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bd9b4u5', 'template_gzp84na', form.current, 'HFGl1H-Kvci1kXnez')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          text: 'Thank You for Contacting Me...',
          imageUrl: './images/me.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        })
        navigate("/");
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <Navbar themeToggler={themeToggler}  />
      <div className='contact'>
        {/* linkedin */}
        <div className='content-box' style={{ float: "left", marginTop: "9%", marginLeft: "-5%" }}>
          <div class="card1"
            style={{
              width: "18rem",
              height: "167px",
              boxShadow: "5px 5px 5px grey",
              marginLeft: "85%"

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
                  }}><i>Nivethitha</i>
                </p></a>
            </div>
          </div>
          {/* twitter */}
          <div class="card2"
            style={{
              width: "18rem",
              height: "166px",
              marginTop: "4%",
              marginLeft: "85%",
              boxShadow: "5px 5px 5px grey"
            }}>
            <div class="card-body">
              <a href="https://github.com/Nivethitha-27" target="_blank"
                style={{
                  textDecoration: "none"
                }}>
                <img src='./images/GitHub-Mark.png' height="90" width="100"
                  style={{ marginLeft: "27%" }} /><br /><br />
                <p class="card-text"
                  style={{ textAlign: "center" }}><i>Nivethitha-27</i>
                </p></a>
            </div>
          </div>
        </div>
        <br /><br /><br />
        {/* mail */}
        <div className='mail'
          style={{ float: "left", marginLeft: "33%",marginTop:"-2%" }} >
          <h5
            style={{
              textAlign: "center",
              color: "darkblue",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontWeight: "bold"
            }}><i>Get In Touch</i></h5>
          <span
            style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", fontSize: "20px" }}>
            If you want to contact or have any questions, opportunities,<br />or might
            simply want to say hello then, feel free to fill out <br />my contact form and
            I'll without a doubt<br /> hit you up in a hurry.</span>
        </div>

        <div className='card'
          style={{
            width: "550px",
            float: "right",
            marginRight: "18%",
            marginTop: "3%",
            height: "285px"
          }}><br />
          {/* mail form */}
          <form ref={form} onSubmit={sendEmail} autoComplete="off"
            style={{
              marginLeft: "12%",
              marginRight: "20%",
            }}>
            <label>Name</label>
            <input type="text" name="user_name" placeholder="Your Name" style={{ marginLeft: "8%", width: "80%", paddingLeft: "4%" }} /><br /><br />
            <label>Email</label>
            <input type="email" name="user_email" placeholder="Your Email" style={{ marginLeft: "8%", width: "80%", paddingLeft: "4%" }} /><br /><br />
            <label>Message</label>
            <textarea name="message" rows="3" style={{ marginLeft: "3%", width: "80%", paddingLeft: "4%" }} placeholder="Give a Message" /><br />
            <input type="submit" value="Send" className='btn btn-primary btn-md'
              style={{ marginLeft: "45%", marginTop: "5%", borderRadius: "15px" }} />
          </form>
        </div>
      </div>

    </>
  )
}

export default Contact



