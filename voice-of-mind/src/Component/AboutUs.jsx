import React from 'react'
// import '../ComponentCss/AboutUs.css';

export default function AboutUs() {

  const Mystyle ={
    textAlign: "center",
  };

  return (
    <>
      <div className="about-section">
        <h1>About Us</h1>
        <br />
        <p style={Mystyle}> As <b>Steve Jobs</b> said "Don't let the noise of other's opinions drown out your own  inner voice"</p>
        <hr />
        <p>As the statistics say mental illness affects 19% of the adult population, 46% of teenagers and 13% of children each year. And only half of those affected received treatment.
        As the per the <b>WORLD HEALTH ORGANISATION</b> Good mental health enables people to realise their potential, cope with the normal stress of life work productively and contribute to their communities</p>
      </div>
      <h2>Our Team</h2>
      <br />
      {/* <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <div className="container">
            <div className="overlay">
               {/* <div className="card"></div> 
              <div className="card-head">
                <h1>Kumar Dhawale</h1>
              </div>
              <div className="card-designation">
                <h2>Full-Stack Developer</h2>
              </div>
              <div className="social-links">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <br/>
    <br />
    <br />
    </>
  )
}
