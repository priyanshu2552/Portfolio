import React from 'react'
import './contact.css'
export const Contact = () => {
  return (
  <>
  <div id='contact' className="main4">
    <div className="header4">
        <h1>Get in Touch</h1>
    </div>
    <div className="bottom4">
        <div className="left4">
            <div className="texts">
                <h1>Let's Talk</h1>
                <h5>As an enthusiast in software and web development, I thrive on collaborative projects and idea exchanges. Whether it's brainstorming new concepts, refining designs, or coding challenges, I'm eager to connect and discuss how we can bring innovation to life together. Let's start a conversation and explore the endless possibilities!</h5>
            </div>
            <div className="contacts">
                <div className="email">
                 <p> <i class="ri-mail-line"></i></p>
                    <p>priyanshuraj2552@gmail.com</p>
                </div>
                <div className="phone">
                    <p><i class="ri-phone-fill"></i></p>
                    <p>+91-9798000239</p>
                </div>
                <div className="location">
                    <p><i class="ri-map-pin-line"></i></p>
                    <p>Supaul,Bihar(India)</p>
                </div>
            </div>
        </div>
        <div className="right4">
            <div className="name">
            <p>Your name</p>
            <input type="text" placeholder='Enter Your name'/>
            </div>
            <div className="Email">
            <p>Your Email</p>
            <input type="text" placeholder='Enter Your email'/>
            </div>
            <div className="Email">
            <p>Write your message here</p>
            <input className="msg" type="text" placeholder='Enter Your message'/>
            </div>
            <button>Submit now</button>

            

        </div>
    </div>
  </div>
  </>
  )
}
