import React from 'react';
import '../index.css';

const Education = () => {
    return (
        <main>
            <section id="education" className="education">
                <h2 className="section-title">Education</h2>
                <div className="education-list">
                    <div className="education-item">
                        <h3>Master's in Artificial Intelligence</h3>
                        <h4>Saint Louis University</h4>
                        <span>2022 - 2024</span>
                        <p>GPA: 3.7 / 4.0</p>
                        <p>Relevant Coursework: Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Neural Networks, and Mobile Robotics.</p>
                    </div>
                    <div className="education-item">
                        <h3>Master of Computer Applications</h3>
                        <h4>Visvesvarya Technological University</h4>
                        <span>2016 - 2019</span>
                        <p>GPA: 3.3 / 4.0</p>
                        <p>Karnataka, India</p>
                    </div>
                    <div className="education-item">
                        <h3>Bachelor's in Computer Science</h3>
                        <h4>Krishna University</h4>
                        <span>2013 - 2016</span>
                        <p>GPA: 3.3 / 4.0</p>
                        <p>Andhra Pradesh, India</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Education;
