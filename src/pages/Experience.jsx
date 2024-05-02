import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import "../styles/experience.css";
import hero from "../img/hero.png";
import bank from "../img/bank.jpeg";
import dobrocenter from "../img/dobrocenter.png";
import integrify1 from "../img/integrify1.png";
import helsinki from "../img/helsinki.jpg";

const Experience = () => {

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
      
      if (ScrollTrigger.isTouch !== 1) {
        ScrollSmoother.create({
          wrapper: '.wrapper',
          content: '.experience__content',
          smooth: 1.5,
          effects: true
        });
  
        gsap.fromTo('.hero-section', { opacity: 1 }, {
          opacity: 0,
          scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
          }
        });
  
        let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');
        itemsL.forEach(item => {
          gsap.fromTo(item, { opacity: 0, x: -50 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
              trigger: item,
              start: '-850',
              end: '-100',
              scrub: true
            }
          });
        });
  
        let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');
        itemsR.forEach(item => {
          gsap.fromTo(item, { opacity: 0, x: 50 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
              trigger: item,
              start: '-750',
              end: 'top',
              scrub: true
            }
          });
        });
      }
    }, []);

  return (
    <div className='experience'>
      <div className="wrapper">
		<div className="experience__content">

			<header className="hero-section">
				<img data-speed=".6" className="hero" src={hero} alt="Alt" />
				<div className="hero-section__container">
					<div data-speed=".75" className="main-header">
						<h1 className="main-title">experience</h1>
					</div>
				</div>
			</header>
		
			<div className="portfolio">
				<div className="portfolio__container">
					<main className="portfolio__gallery">
	
						<div data-speed=".9" className="gallery__left">
		
							<img className="gallery__item" src={bank} alt="Alt"/>		
							<div className="text-block gallery__item">
								<h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
								<p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
							</div>
				
						</div>

						<div data-speed="1.1" className="gallery__right">
		
							<div className="text-block gallery__item">
								<h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
								<p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
							</div>
		
							<img className="gallery__item" src={dobrocenter} alt="Alt"/>
		
						</div>

					</main>
				</div>
			</div>

		</div>
	   </div>
    </div>
  )
}

export default Experience
