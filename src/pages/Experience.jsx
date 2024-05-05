import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import "../styles/experience.css";
import hero from "../img/hero.png";
import bank from "../img/bank.jpeg";
import dobrocenter from "../img/dobrocenter.png";
import integrify1 from "../img/integrify1.png";
import helsinki from "../img/helsinki1.jpg";

const Experience = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll('.gallery__item img');
    const totalImages = images.length;
    let loadedCount = 0;

    images.forEach((img) => {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = img.onload;
    });

    if (totalImages === 0) {
      setImagesLoaded(true);
    }
  }, []);

  useEffect(() => {
    if(imagesLoaded) {
      gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.hero-section', { opacity: 1 }, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top',
        end: '820',
        scrub: true
      }
    })

    const animateGalleryItems = (selector, direction = 'left') => {
      const xOffset = direction === 'left' ? '-100%' : '100%';
      gsap.utils.toArray(selector).forEach(item => {
        gsap.fromTo(item, { x: xOffset, opacity: 0 }, {
          x: '0%', opacity: 1, scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            end: 'center center',
            scrub: true
          }
        });
      });
    };

    animateGalleryItems('.gallery__left .gallery__item', 'left');
    animateGalleryItems('.gallery__right .gallery__item', 'right');
  
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
    }
  }, [imagesLoaded]);

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

						<div data-speed=".1" className="gallery__left">
							<img className="gallery__item" src={bank} alt="Alt"/>		
							<div className="text-block gallery__item">
                <h2 className="text-block__h">Sovkombank</h2>
						    <p className="text-block__p">A bank where I had a role of front-end developer intern.<br/> During this internship I elevated project design and implementation, as well as enhanced end-to-end testing
                  efficacy, resulting in increase in user satisfaction</p>
							</div>
						</div>

						<div data-speed=".1" className="gallery__right">
							<div className="text-block gallery__item">
              <h2 className="text-block__h">dobrocenter</h2>
					  	<p className="text-block__p">A Finnish organization for development and creative leisure for children
              and adults. While working on the Dobrocenter project, I used to be in touch with the customer, managing the project by myself. This included negotiating with my client, presenting Figma designs, making changes according to altered needs, and implementing the design on the webpage.</p>
							</div>
							<img className="gallery__item" src={dobrocenter} alt="Alt"/>
						</div>

            <div data-speed=".1" className="gallery__left">
              <img className="gallery__item" src={integrify1} alt="Alt"/>
							<div className="text-block gallery__item">
              <h2 className="text-block__h">Integrify</h2>
					  	<p className="text-block__p">Integrify is a training and recruitment services provider that brings software developers and Finnish tech teams together. During the Integrify program, I built robust web applications and served as a tech lead. In this role, I communicated with my team, set and monitored deadlines, provided assistance to team members when needed, and organized catch-ups and time management.</p>
							</div>
						</div>

            <div data-speed=".1" className="gallery__right">
							<div className="text-block gallery__item">
              <h2 className="text-block__h">University of Helsinki</h2>
					  	<p className="text-block__p text-helsinki">Open online course on JavaScript based modern web development by University of Helsinki and Houston Inc..<br/> While attending courses at the University of Helsinki, I learned new topics, practiced existing knowledge, and managed my time effectively to combine these courses with the Integrify program.</p>
							</div>
							<img className="gallery__item helsinki" src={helsinki} alt="Alt"/>
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
