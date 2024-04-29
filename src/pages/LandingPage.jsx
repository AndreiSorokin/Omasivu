import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import img from "../img/logo.svg";
import video from "../media/background.mp4";
import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

const LandingPage = () => {

  const swiperRef = useRef(null);
  const videoRef = useRef(null);

useEffect(() => {
  const swiperInstance = swiperRef.current;
  if (swiperInstance) {
    swiperInstance.on('slideChange', function () {
      if (videoRef.current) {
        const targetTime = (videoRef.current.duration / (this.slides.length - 1)) * this.realIndex;
        gsap.to(videoRef.current, {
          currentTime: targetTime,
          duration: 1.6,
          ease: "power2.out",
          onComplete: () => {
            videoRef.current.pause();
          }
        });
      }
    });
    swiperInstance.on('slideChangeTransitionStart', function () {
      if (videoRef.current) videoRef.current.classList.add('change');
    }).on('slideChangeTransitionEnd', function () {
      if (videoRef.current) videoRef.current.classList.remove('change');
    });
  }
}, []);
  
  return (
    <div>
      <div className="top-line">
        <div className="container container-top">
          <div>
            <div className="logo">
              <img src={img} alt="Logo"/>
            </div>
          </div>
          <div>
            <ul className="main-mnu">
              <li><a href="#">About</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contacts</a></li>
            </ul>
          </div>
        </div>
      </div>

      <Swiper className="slider" onSwiper={(swiper) => (swiperRef.current = swiper)}
  onSlideChange={() => console.log('slide change')}
  modules={[Mousewheel]}
  mousewheel={true} >
        <SwiperSlide className="slide">
          <div className="slide__content">
            <h2>Abstract</h2>
            <p>Designing for the future</p>
            <button>Join Us</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
				<div className="slide__content">
					<h2>Design</h2>
					<p>Designing for the future</p>
					<button>Join Us</button>
				</div>
        </SwiperSlide>
        <SwiperSlide className="slide">
				<div className="slide__content">
					<h2>Design</h2>
					<p>Designing for the future</p>
					<button>Join Us</button>
				</div>
        </SwiperSlide>
        <SwiperSlide className="slide">
				<div className="slide__content">
					<h2>Design</h2>
					<p>Designing for the future</p>
					<button>Join Us</button>
				</div>
        </SwiperSlide>

      </Swiper>

      <video ref={videoRef} src={video} className="video-background" muted autoPlay ></video>
    </div>
  );
};

export default LandingPage