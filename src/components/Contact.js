import React from 'react';
import '../index.css';

const Contact = () => {
    return (
        <main>
            <section id="contact">
                <div className="row section-intro">
                    <div className="col-twelve">
                        <h1>Let's Connect!</h1>
                        <p className="lead">Feel free to connect with me on LinkedIn, check out my projects on GitHub, and follow me on Instagram, and watch my YouTube channel for Pi4Micronaut content.</p>
                    </div>
                </div>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/mruthvik" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/ruthvikm" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.instagram.com/ruthvik_mannem" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/playlist?list=PLMIPmRryhlhGRW9PMYn_oUs4mSBKd3nNG" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <br/>
                <br/>
                <div className="row contact-info">
                    <div className="col-six tab-full">
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h5>Email Me At</h5>
                        <p><i>mannemruthvik@gmail.com</i></p>
                    </div>
                    <div className="col-six tab-full">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h5>Where to find me</h5>
                        <p><i>St. Louis, Missouri - USA</i></p>
                    </div>
                </div>      
            </section>
        </main>
    );
}

export default Contact;
