import React, { useEffect, useState, useRef } from 'react';
import "../styles/certificates.css";
import firstCertificate from "../img/certificate-fullstack.png";

export default function Certificates() {
    const [lastPos, setLastPos] = useState(window.innerHeight / 5);
    const framesRef = useRef([]);
    const zVals = useRef([]);

    useEffect(() => {
        const zSpacing = -1000;
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
    <div className="frame__content frame__content--left">
        <div className="frame-media frame-media_left" style={{backgroundImage: `url(${firstCertificate})`}}></div>
    </div>
    <div className="frame__content frame__content--right">
        <h2 className='certificates-header'>Beautiful World</h2>
        <p>Description or additional text here</p>
    </div>
</div>

                    <div className="frame" ref={addFrameRef}>
                        <div className="frame__content">
                            <div className="frame-media frame-media left" style={{backgroundImage: `url(${firstCertificate})`}}></div>
                        </div>
                    </div>

                    <div className="frame" ref={addFrameRef}>
                        <div className="frame__content">© WebDesign Master</div>
                    </div>
                </section>
            </div>
        </div>
    );
}