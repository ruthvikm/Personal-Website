import React from 'react';
import '../index.css';

const Experience = () => {
    return (
        <main>
            <section className="experience">
                <h2>Experience</h2>
                <div className="job">
                    <h3>Graduate Research Assistant</h3>
                    <h4>Open-Source SLU, St. Louis</h4>
                    <span>June 2023 - May 2024</span>
                    <p>
                        Led the development of BubbleScan, an AI application for analyzing bubbled responses from scantron sheets, and the Pi4Micronaut project, a Java library for Raspberry Pi hardware interactions using the Micronaut framework and PI4J library. Implemented Agile methodologies and managed technical aspects, ensuring high software quality and timely project completion.
                    </p>
                </div>
                <div className="job">
                    <h3>Machine Learning Engineer</h3>
                    <h4>IBM India Pvt Ltd, Bangalore</h4>
                    <span>March 2020 - August 2022</span>
                    <p>
                    Led the development of machine learning models for an automated warehouse monitoring system using drones. Utilized Python, TensorFlow, and PyTorch for data wrangling and model training. Implemented ResNet and YOLO for real-time object detection, boosting performance. Optimized GPU tasks with CUDA, authored REST APIs for Azure integration, and improved model accuracy. Actively participated in Agile and DevOps practices, collaborating with cross-functional teams to deliver high-quality solutions.
                    </p>
                </div>
                <div className="job">
                    <h3>Intern</h3>
                    <h4>Fincore Pvt Ltd, Bangalore</h4>
                    <span>July 2019 - Dec 2019</span>
                    <p>
                        Developed a web-based ticketing tool using Python, employing machine learning algorithms and NLP techniques to automatically categorize incidents. Enhanced the system's ability to understand and process user queries effectively, ensuring quick and accurate ticket assignment.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Experience;
