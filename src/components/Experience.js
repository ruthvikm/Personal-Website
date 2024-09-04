import React from 'react';
import '../index.css';

const Experience = () => {
    return (
        <main>
            <section className="experience">
                <h2>Experience</h2>
                <div className="job">
                    <h3>Research Assistant</h3>
                    <h4>Open-Source SLU, Saint Louis University, St. Louis</h4>
                    <span>June 2023 - Present</span>
                    <p>
                        Tech-Lead for a team of four, spearheading the development of BubbleScan-AI, an open-source AI tool that automates scantron sheet analysis, improving grading efficiency and reducing manual effort by 95%. Also directed the Pi4Micronaut project, building a Java library for Raspberry Pi hardware integration using the Micronaut framework and Pi4J. Employed Agile methodologies to ensure high-quality software, timely delivery, and seamless team collaboration.
                    </p>
                </div>
                <div className="job">
                    <h3>Machine Learning Engineer</h3>
                    <h4>IBM India Pvt Ltd, Bangalore</h4>
                    <span>March 2020 - August 2022</span>
                    <p>
                        Developed and deployed machine learning models for predictive maintenance and warehouse automation, improving efficiency by reducing equipment downtime by 30%. Leveraged CUDA to boost computational performance by 40%, and deployed scalable solutions on Azure with Docker and Kubernetes, ensuring robust, real-time data processing across distributed environments.
                    </p>
                </div>
                <div className="job">
                    <h3>Intern</h3>
                    <h4>Fincore Pvt Ltd, Bangalore</h4>
                    <span>July 2019 - Dec 2019</span>
                    <p>
                        Designed and implemented a sentiment analysis tool using NLP, achieving 92% accuracy in customer feedback evaluation. This tool provided critical insights that helped the company optimize customer engagement strategies, driving better customer satisfaction.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Experience;
