import React, { useEffect, useState } from 'react';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import videoSrc from './assets/Black-bg.mov';
import vidSrc from './assets/Jarvis.webm';
import imgSrc from './assets/friends.png'

const App = () => {
    const [showAssistant, setShowAssistant] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const video = document.getElementById('background-video');
        if (video) {
            video.playbackRate = 0.5; // Slow down the video playback speed
        }

        // Show the assistant video after 5 seconds
        const timer = setTimeout(() => {
            setShowAssistant(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleAssistantClick = () => {
        setShowPopup(true);
        // Hide the popup message after 3 seconds
        const popupTimer = setTimeout(() => {
            setShowPopup(false);
            // Fade out the assistant video 2 seconds after the popup disappears
            const fadeOutTimer = setTimeout(() => {
                setFadeOut(true);
                // Hide the assistant video completely after the fade-out animation
                setTimeout(() => {
                    setShowAssistant(false);
                    setFadeOut(false); // Reset fade-out state
                }, 2000); // Match the animation duration
            }, 2000);
            return () => clearTimeout(fadeOutTimer);
        }, 3000);

        return () => clearTimeout(popupTimer);
    };

    return (
        <div className="App">
            <div className="video-background">
                <video id="background-video" autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="content-overlay">
                <Header />
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="experience"><Experience /></section>
                <section id="education"><Education /></section>
                <section id="projects"><Projects /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>
                <section id="footer"><Footer /></section>
            </div>
            {showAssistant && (
                <div className={`assist-video ${fadeOut ? 'fade-out' : 'show'}`} onClick={handleAssistantClick}>
                    <video id="assistant-video" autoPlay loop muted>
                        <source src={vidSrc} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                    {showPopup && (
                        <div className="popup-message">
                            <div className="popup-avatar">
                                <img src={imgSrc} alt="Assistant" />
                            </div>
                            <div className="popup-content">
                                 Hi I'm Jarvis, Ruthvik is still fixing me !!
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
