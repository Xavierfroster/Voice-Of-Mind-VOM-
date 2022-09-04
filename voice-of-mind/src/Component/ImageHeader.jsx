import React from 'react'
import M1 from '../Images/M1.jpg'
import P1 from '../Images/P1.jpg'
import P3 from '../Images/P3.jpg'
export default function ImageHeader() {
  return (
    <>
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* <!-- Indicators/dots --> */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

        {/* <!-- The slideshow/carousel --> */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={M1} alt="Los Angeles" width="1535" height="500"/>
                </div>
                <div className="carousel-item">
                    <img src={P1} alt="Chicago" className="d-block"  width="1535" height="500"/>
                </div>
                <div className="carousel-item">
                    <img src={P3} alt="New York" className="d-block" width="1535" height="500"/>
                </div>
            </div>

        {/* Left and right controls/icons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    </>
  )
}
