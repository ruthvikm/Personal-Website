import React from 'react';
import '../index.css';

const Projects = () => {
    return (
        <main>
            <section className="projects">
                <h2>Projects</h2>
                <div className="project">
                    <h3>BubbleScan-AI</h3>
                    <p>
                        Developed an Open-Source AI application that uses deep learning and computer vision to accurately
                        identify and analyze bubbled responses from scantron sheets, accelerating the grading process and
                        reducing manual effort by 95%.
                    </p>
                    <ul>
                        <li>Defined AI modules in Python, utilizing TensorFlow, Scikit-Learn, and PyTorch, achieving 100% accuracy in data processing and bubbled response detection.</li>
                        <li>Applied OpenCV techniques in image preprocessing, feature extraction, and neural network optimization to ensure high performance.</li>
                        <li>Conducted thorough testing and validation, integrated the model into a user-friendly web application for real-time access.</li>
                    </ul>
                </div>
                <div className="project">
                    <h3>Pi4Micronaut</h3>
                    <p>
                        Led a team of four in developing an Open-Source Java library for Raspberry Pi hardware interactions
                        using the Micronaut framework and PI4J library.
                    </p>
                    <ul>
                        <li>Managed technical aspects including issue creation, pull request evaluations, and GitHub codebase maintenance, ensuring high software quality.</li>
                        <li>Successfully released versions 1.0 and 1.1 of the library, adding support for 16 components.</li>
                        <li>Introduced Agile methodologies for efficient project management, ensuring timely completion of development sprints and alignment with client needs.</li>
                        <li>Streamlined the CI/CD pipeline using GitHub Actions, releasing the library to the Maven Central Repository and automating documentation publication to GitHub Pages.</li>
                        <li>Provided technical leadership and mentorship to team members, fostering a collaborative and innovative development environment.</li>
                    </ul>
                </div>
                <div className="project">
                    <h3>Automated Warehouse Monitoring System Using Drones</h3>
                    <p>
                        Spearheaded the development of machine learning models using Python to automatically identify labels
                        and important information from drone-captured frames, enhancing operational efficiency over a 2.5-year period.
                    </p>
                    <ul>
                        <li>Utilized Pandas, NumPy, TensorFlow, PyTorch, Scikit-Learn, and CNNs for data wrangling, model training, and management in multi-node environments, achieving a 30% reduction in model training time.</li>
                        <li>Implemented models such as ResNet and YOLO for real-time object detection and classification, significantly boosting the performance of machine learning application by up to 35%.</li>
                        <li>Engineered and optimized GPU kernel programming with CUDA to accelerate computational tasks by 40%.</li>
                        <li>Authored REST APIs to enable integration and deployment in Azure Machine Learning Service environment, facilitating real-time data processing and analytics that reduced integration time by 25%.</li>
                        <li>Identified and created relevant features from raw data to improve model accuracy, leading to a 20% increase in predictive performance.</li>
                        <li>Evaluated model performance using metrics such as accuracy, precision, recall, and F1-score, and conducted cross-validation to ensure models generalized well to unseen data, improving overall model reliability by 15%.</li>
                        <li>Mastered the latest advancements in machine learning and related fields, experimenting with new algorithms, tools, and techniques, including Vision Transformers, RNNs, and LSTMs, contributing to the development of improvised machine learning methodologies.</li>
                        <li>Defined CI/CD pipelines and version control using Git, streamlining the deployment process with Docker for containerization and Kubernetes for orchestration.</li>
                        <li>Actively participated in Agile and DevOps practices, working in cross-functional teams to deliver high-quality solutions aligned with business objectives and client expectations.</li>
                    </ul>
                </div>
                <div className="project">
                    <h3>Incident Elucidation with Auto Intelligence</h3>
                    <p>
                        Developed a web-based ticketing tool using Python, designed to automatically categorize and manage incidents.
                    </p>
                    <ul>
                        <li>Implemented machine learning algorithms to categorize incidents based on content, urgency, and other relevant parameters, ensuring quick and accurate ticket assignment to appropriate teams.</li>
                        <li>Employed NLP techniques to interpret and process user queries and complaints, enhancing the model’s ability to understand and categorize incidents effectively.</li>
                        <li>Designed and tested models to improve incident categorization accuracy, resulting in a 40% reduction in ticket handling time.</li>
                        <li>Collaborated with senior developers to integrate the tool with existing company infrastructure, ensuring seamless deployment and operation.</li>
                    </ul>
                </div>
                <div className="project">
                    <h3>Line Following Differential Drive Robot</h3>
                    <p>
                        Developed a differential drive robot capable of following a predetermined path using MATLAB, C++, and Arduino.
                    </p>
                    <ul>
                        <li>Integrated infrared sensors and shaft encoders with an ATMega328P microcontroller on an Arduino for precise movement and path tracking.</li>
                        <li>Implemented a feature for mapping the robot's coordinates to world coordinates.</li>
                        <li>Achieved efficient path planning, navigation, and accurate real-world positioning.</li>
                        <li>Employed a Kalman filter for enhanced accuracy in robot localization and path tracking, ensuring robust and reliable navigation.</li>
                    </ul>
                </div>
                <div className="project">
                    <h3>Attention-Based Deep Driving Model for Autonomous Vehicles</h3>
                    <p>
                        Engineered an advanced deep learning model to process multi-view camera data for autonomous vehicle navigation using Python and TensorFlow.
                    </p>
                    <ul>
                        <li>Integrated diverse data inputs from front, rear, and side-view cameras, focusing on the semantic understanding of environmental cues along with navigation route data.</li>
                        <li>Developed the Multi-View Attention (MVA) module employing attention mechanisms.</li>
                        <li>Executed comprehensive model training and testing using the Drive360 dataset.</li>
                        <li>Model demonstrated superior performance in vehicle steering and speed prediction when compared to the Drive360 model based on the Mean Square Error.</li>
                    </ul>
                </div>
                <div className="project">
                    <h3>Automatic License Plate Recognition</h3>
                    <p>
                        Developed an advanced system for automatic detection and recognition of vehicle license plates in images using Python, OpenCV, YOLOv3, and Tesseract OCR.
                    </p>
                    <ul>
                        <li>Integrated OpenCV for image processing and manipulation to enhance the accuracy of the license plate detection.</li>
                        <li>Employed Tesseract OCR for extracting alphanumeric characters from the detected license plates, enabling text recognition and interpretation.</li>
                        <li>Implemented image preprocessing techniques like grayscale conversion, bilateral filtering, and edge detection to improve the quality of input images for better OCR results.</li>
                        <li>Utilized Pandas for data handling, allowing for the efficient storage and management of the extracted license plate data.</li>
                        <li>Tested and validated the system with a diverse set of images, achieving high accuracy in both detection and recognition phases.</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Projects;
