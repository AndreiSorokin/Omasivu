import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { gsap } from 'gsap';
import video from "../media/background.mp4";
import '../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import '../styles/landing.css'

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
          ease: "power2.easeOut",
          onComplete: () => {
            videoRef.current.pause();
            gsap.set(videoRef.current, {willChange: "true"});
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

useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        videoRef.current.src = video;
      }
    });
  });

  observer.observe(videoRef.current);

  return () => observer.disconnect();
}, []);
  
  return (
    <div className='landing'>
      <Swiper className="slider"  onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Mousewheel, Navigation, Pagination]}
        mousewheel={true}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }} >
        <SwiperSlide className="slide">
          <div className="slide__content">
            <h2 className='header'>about</h2>
            <p className='text'>Full Stack developer with passion to challenges</p>
            <Link to='/about'><button>more</button></Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
				<div className="slide__content">
					<h2 className='header'>certificates</h2>
					<p className='text'>Gained certificates</p>
					<Link to='/certificates'><button>more</button></Link>
				</div>
        </SwiperSlide>
        <SwiperSlide className="slide">
				<div className="slide__content">
					<h2 className='header'>experience</h2>
					<p className='text'>Briefly about my experience</p>
					<Link to='/experience'><button>more</button></Link>
				</div>
        </SwiperSlide>
        <SwiperSlide className="slide">
				<div className="slide__content">
					<h2 className='header'>skills</h2>
					<p className='text'>Skill bars</p>
					<Link to='/skills'><button>more</button></Link>
				</div>
        </SwiperSlide>

        <div className="slider-bottom">
			    <div className="slider-pagination">
			    	<div className="swiper-pagination"></div>
			    </div>
			    <div className="slider-navigation">
			    	<div className="swiper-button-prev"></div>
			    	<div className="swiper-button-next"></div>
			    </div>
		    </div>

      </Swiper>

      <video ref={videoRef} className="video-background" muted playsInline></video>
    </div>
  );
};

export default LandingPage