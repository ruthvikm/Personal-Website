import React from 'react';
import '../index.css';

const Skills = () => {
    return (
        <main>

            <section className="skills">
                <h2>Skills</h2>
                <div className="skill">
                    <h3>Programming Languages</h3>
                    <p>Python, Java, C++, R</p>
                </div>
                <div className="skill">
                    <h3>Areas of Expertise</h3>
                    <p>Machine Learning, Deep Learning, Computer Vision, Natural Language Processing (NLP), Neural Networks, AI Algorithms, LLMs & GenAI</p>
                </div>
                <div className="skill">
                    <h3>Cloud & DevOps</h3>
                    <p>AWS SageMaker, Azure Machine Learning, Docker, Kubernetes, MLOps, CI/CD</p>
                </div>
                <div className="skill">
                    <h3>Frameworks & Tools</h3>
                    <p>TensorFlow, PyTorch, Scikit-Learn, Keras, OpenCV, NLTK, Pandas, NumPy, PySpark, MLFlow, Hugging Face, SQL, XGBoost</p>
                </div>
                <div className="skill">
                    <h3>APIs & Libraries</h3>
                    <p>FastAPI, RESTful APIs, RAG, GPT, BERT, Langchain, Streamlit</p>
                </div>
                <div className="skill">
                    <h3>Development Practices</h3>
                    <p>Agile Development, Microservices, Version Control (Git, GitHub), Testing and Validation, CI/CD Pipelines</p>
                </div>
                <div className="skill">
                    <h3>GPU & Parallel Computing</h3>
                    <p>CUDA, GPU Acceleration, Distributed Computing</p>
                </div>
            </section>

            <section className="certifications">
                <h3>Certifications</h3>
                <ul>
                    <li>Microsoft Azure Fundamentals (AZ-900)</li>
                </ul>
                <div className="blog-posts">
                    <h3>Blog Posts</h3>
                    <ul>
                        <li><a href="https://oss-slu.github.io/news/pi4micronaut">Pi4Micronaut Introduction</a></li>
                        <li><a href="https://oss-slu.github.io/news/blog_pi4micronaut">Pi4Micronaut Launch</a></li>
                        <li><a href="https://oss-slu.github.io/news/blog_presentation_pi4micronaut">Pi4Micronaut Workshop</a></li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Skills;
