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
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.hero-section', { opacity: 1 }, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '820',
        scrub: true
      }
    })
    
    gsap.utils.toArray('.gallery__left .gallery__item').forEach(item => {
      gsap.fromTo(item, { x: '-50%', opacity: 0 }, {
        x: '0%', opacity: 1, scrollTrigger: {
          trigger: item,
          start: '-50',
          end: 'center',
          scrub: true
        }
      });
    });
  
    gsap.utils.toArray('.gallery__right .gallery__item').forEach(item => {
      gsap.fromTo(item, { opacity: 0, x: '50%' }, {
        opacity: 1, x: 0, scrollTrigger: {
          trigger: item,
          start: '-50',
          end: 'center',
          scrub: true
        }
      });
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
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

          {/* <div data-speed=".9" className="mobile gallery__right">
            <h2 className="text-block__h">Sovkombank</h2>
						<p className="text-block__p">A bank I had a role of front-end developer intern.<br/> During this internship I elevated project design and implementation, as well as enhanced end-to-end testing
              efficacy, resulting in increase in user satisfaction</p>
          </div> */}

						<div data-speed=".9" className="gallery__left">
							<img className="gallery__item" src={bank} alt="Alt"/>		
							<div className="text-block gallery__item">
                <h2 className="text-block__h">Sovkombank</h2>
						    <p className="text-block__p">A bank I had a role of front-end developer intern.<br/> During this internship I elevated project design and implementation, as well as enhanced end-to-end testing
                  efficacy, resulting in increase in user satisfaction</p>
							</div>
						</div>
            

            {/* <div data-speed=".9" className="mobile gallery__left">
              <h2 className="text-block__h">dobrocenter</h2>
					  	<p className="text-block__p">123</p>
            </div> */}

						<div data-speed=".9" className="gallery__right">
							<div className="text-block gallery__item">
              <h2 className="text-block__h">dobrocenter</h2>
					  	<p className="text-block__p">123</p>
							</div>
							<img className="gallery__item" src={dobrocenter} alt="Alt"/>
						</div>

            {/* <div data-speed=".9" className="gallery__right">
							<div className="text-block gallery__item">
              <div className='mobile '>
                <h2 className="text-block__h">new code block</h2>
							    <p className="text-block__p">123</p>
              </div>
              <img className="gallery__item" src={dobrocenter} alt="Alt"/>
							</div>
						</div> */}

            {/* <div data-speed=".9" className="pc gallery__left">
              <div className="text-block gallery__item">
                <div className='pc'>
                  <h2 className="text-block__h">new code block</h2>
                  <p className="text-block__p">123</p>
                </div>
              </div>
              <img className="gallery__item" src={dobrocenter} alt="Alt"/>
            </div> */}

					</main>
				</div>
			</div>

		</div>
	   </div>
    </div>
  )
}

export default Experience
