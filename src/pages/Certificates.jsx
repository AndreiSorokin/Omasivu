import React, { useEffect, useState, useRef } from 'react';
import "../styles/certificates.css";
import firstCertificate from "../img/certificate-fullstack.png";
import diploma from "../img/diploma.jpg"
import graphQl from "../img/certificate-graphql.png";
import integrify from "../img/Integrify.png";
import Java from "../img/Java.png";

export default function Certificates() {
    const [lastPos, setLastPos] = useState(window.innerHeight / 9);
    const framesRef = useRef([]);
    const zVals = useRef([]);

    useEffect(() => {
        const zSpacing = -500;
        if (framesRef.current.length > 0 && zVals.current.length === 0) {
            zVals.current = framesRef.current.map((_, i) => (i * zSpacing) + zSpacing);
        }

        const handleScroll = () => {
            const top = document.documentElement.scrollTop;
            const delta = lastPos - top;
            setLastPos(top);

            zVals.current = zVals.current.map(zVal => zVal + delta * -5.5);

            framesRef.current.forEach((frame, i) => {
                if (frame) {
                    const transform = `translateZ(${zVals.current[i]}px)`;
                    const opacity = zVals.current[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
                    frame.style.transform = transform;
                    frame.style.opacity = opacity;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastPos]);

    const addFrameRef = el => {
        if (el && !framesRef.current.includes(el)) {
            framesRef.current.push(el);
        }
    };

    return (
    <div className='certificates'>
        <div className="container-certificates">
            <section className="gallery">
                <div className="frame" ref={addFrameRef}>
                    <div className="frame__content">
                        <div className="frame-media frame-media_left diploma" style={{backgroundImage: `url(${diploma})`}}></div>
                        <div className="frame-text" ref={addFrameRef}>
                            <div className="text-left">
                                <h2 className='certificates-header certificates-header-left certificates-header-diploma'>Diploma</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame" ref={addFrameRef}>
                    <div className="frame__content">
                        <div className="frame-media frame-media_right" style={{backgroundImage: `url(${integrify})`}}></div>
                        <div className="frame-text" ref={addFrameRef}>
                            <div className="text-right">
                                <h2 className='certificates-header certificates-header-right certificates-header-integrify'>Integrify</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame" ref={addFrameRef}>
                    <div className="frame__content">
                        <div className="frame-media frame-media_left" style={{backgroundImage: `url(${Java})`}}></div>
                        <div className="frame-text" ref={addFrameRef}>
                            <div className="text-left">
                                <h2 className='certificates-header certificates-header-left'>Java</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame" ref={addFrameRef}>
                    <div className="frame__content">
                        <div className="frame-media frame-media_right" style={{backgroundImage: `url(${firstCertificate})`}}></div>
                        <div className="frame-text" ref={addFrameRef}>
                            <div className="text-right">
                                <h2 className='certificates-header certificates-header-right certificates-header-helsinki'>University of Helsinki main Course</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="frame" ref={addFrameRef}>
                    <div className="frame__content">
                        <div className="frame-media frame-media_left" style={{backgroundImage: `url(${graphQl})`}}></div>
                        <div className="frame-text" ref={addFrameRef}>
                            <div className="text-left">
                                <h2 className='certificates-header certificates-header-left'>GraphQL</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="frame" ref={addFrameRef}>
                    <div className="frame__content">More certificates coming soon... :)</div>
                </div>
            </section>
        </div>
    </div>
    );
}