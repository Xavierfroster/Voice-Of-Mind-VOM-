//import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../ComponentCss/Quote.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Quote() {
  return (
    <> 
      <div id="area">

        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>
            <p>"Don’t let the noise of others’ opinions drown out your own inner voice"<br/><br/><br/></p>
            <p><font>-Steve Jobs</font></p>
        </SwiperSlide>
        <SwiperSlide>
            <p>"We all have the right to choose our own future. We should be able to walk the paths that we choose, <br/> not the future you´ve decided for us."<br/><br/><br/></p>
            <p><font>-Natsu Dragneel</font></p>
        </SwiperSlide>
        <SwiperSlide>
            <p>"Wherever someone thinks of you, that's where home is."<br/><br/><br/></p>
            <p><font>-Jiraiya</font></p>
        </SwiperSlide>
        <SwiperSlide>
            <p>“If you don’t like your destiny, don’t accept it. Instead have the courage to change it the way you want it to be.”<br/><br/><br/></p>
            <p><font>-Naruto Uzumaki</font></p>
        </SwiperSlide>
        <SwiperSlide>
            <p>“Being able to be your true self is one of the strongest components of good mental health.”<br/><br/><br/></p>
            <p><font>–Dr. Lauren Fogel Mersy</font></p>
        </SwiperSlide>
        <SwiperSlide>
            <p>“A man is made by his beliefs. As he believes. So he becomes.”<br/><br/><br/></p>
            <p><font>-God Krishna</font></p>
        </SwiperSlide>
        <SwiperSlide>
            <p>"There is a crack in everything, that’s how the light gets in." <br/><br/><br/></p>
            <p><font>― Leonard Cohen</font></p>
        </SwiperSlide>
        <SwiperSlide>
            <p>“Mental health affects every aspect of your life. It’s not just this neat little issue you can put into a box.”<br/><br/><br/></p>
            <p><font>— Shannon Purser</font></p>
        </SwiperSlide>
        <SwiperSlide>
            <p>"Nothing can harm you as much as your own thoughts unguarded."<br/><br/><br/></p>
            <p><font>- Lord Buddha</font></p>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}
