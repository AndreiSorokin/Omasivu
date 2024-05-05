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
    
    // gsap.utils.toArray('.gallery__left .gallery__item').forEach(item => {
    //   gsap.fromTo(item, { x: '-350%', opacity: 0 }, {
    //     x: '0%', opacity: 1, scrollTrigger: {
    //       trigger: item,
    //       start: '-50',
    //       end: 'center center',
    //       scrub: true
    //     }
    //   });
    // });

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
  
    // gsap.utils.toArray('.gallery__right .gallery__item').forEach(item => {
    //   gsap.fromTo(item, { opacity: 0, x: '350%' }, {
    //     opacity: 1, x: 0, scrollTrigger: {
    //       trigger: item,
    //       start: '-50',
    //       end: 'top',
    //       scrub: true
    //     }
    //   });
    // });

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

          {/* <div data-speed=".9" className="mobile gallery__right">
            <h2 className="text-block__h">Sovkombank</h2>
						<p className="text-block__p">A bank I had a role of front-end developer intern.<br/> During this internship I elevated project design and implementation, as well as enhanced end-to-end testing
              efficacy, resulting in increase in user satisfaction</p>
          </div> */}

						<div data-speed=".1" className="gallery__left">
							<img className="gallery__item" src={bank} alt="Alt"/>		
							<div className="text-block gallery__item">
                <h2 className="text-block__h">Sovkombank</h2>
						    <p className="text-block__p">A bank where I had a role of front-end developer intern.<br/> During this internship I elevated project design and implementation, as well as enhanced end-to-end testing
                  efficacy, resulting in increase in user satisfaction</p>
							</div>
						</div>

            {/* <div data-speed=".9" className="mobile gallery__left">
              <h2 className="text-block__h">dobrocenter</h2>
					  	<p className="text-block__p">123</p>
            </div> */}

						<div data-speed=".1" className="gallery__right">
							<div className="text-block gallery__item">
              <h2 className="text-block__h">dobrocenter</h2>
					  	<p className="text-block__p">A Finnish organization for development and creative leisure for children
              and adults. While working on dobrocenter project I used to be in touch with the customer and manage the project by myself, negotiating with my client, presenting figma designs, making changes according to changed needs and implement the design to the web page</p>
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

            <div data-speed=".1" className="gallery__left">
              <img className="gallery__item" src={integrify1} alt="Alt"/>
							<div className="text-block gallery__item">
              <h2 className="text-block__h">Integrify</h2>
					  	<p className="text-block__p">Integrify is a training and recruitment services provider that brings software developers and Finnish tech teams together. During Integrify program I used to build robust web applications and had a role of tech lead during what I used to communicate with my team, set up and control deadlines, provide help my team members when they needed it and organise catch ups as well as organise time management</p>
							</div>
						</div>

            <div data-speed=".1" className="gallery__right">
							<div className="text-block gallery__item">
              <h2 className="text-block__h">University of Helsinki</h2>
					  	<p className="text-block__p text-helsinki">Open online course on JavaScript based modern web development by University of Helsinki and Houston Inc..<br/>While my journey in university of Helsinki courses I was learning new topics and practice knowledge I had already had and making time management in order to be able to combine this course with integrify</p>
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
