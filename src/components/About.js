import React from 'react';
import profilePic from '../assets/ruthvik_avatar.png'; 
import '../index.css';

const About = () => {
    return (
        <section id="about">  
            <div className="section-intro">
                <h1 className="section-title">Let me introduce myself.</h1>
                <div className="profile-pic">
                    <img src={profilePic} alt="Profile_Picture" />
                </div>
                <div className="intro-info">
                    <p className="lead">
                        A passionate Machine Learning Engineer and Software Developer with professional experience as a Graduate Research Assistant, Machine Learning Engineer, and Intern. I hold a Master's degree in Artificial Intelligence from Saint Louis University, another Master's degree in Computer Applications from Oxford College of Engineering and a Bachelor's degree in Computer Science from Krishna University. I have developed expertise in various fields, including AI/ML application development and optimization, Software Development, Project Management etc,.
                    </p>
                </div>   			
            </div> 
        </section>
    );
}

export default About;
