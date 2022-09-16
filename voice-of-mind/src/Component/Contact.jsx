import React from 'react';
import '../ComponentCss/Contact.css';
import C1 from '../Images/ContactFormPic.png';
export default function Contact() {
  return (
    <>
      <h2>Contact Us</h2>
      <p>Please leave us a message we willget back too you ASAP</p>
        <div className="container">
          <div className="row">
            <div className="column">
              <form action="">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <label for="country">Country</label>
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
                <input type="submit" value="Submit"/>
              </form>
            </div>
            <div className="column">
              <div className="imgalign">
                <img src={C1} alt="Buddha-Pic" />
              </div>
              <hr />
              <p>"Nothing can harm you as much as your own thoughts unguarded."</p>
              <p><font>- Lord Buddha</font></p>
            </div>
          </div>
        </div>
        <br></br>
    </>
  )
}
