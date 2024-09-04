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
                        Tech-Lead for the development of an Open-Source AI application that uses <b>Deep Learning</b> and <b>Computer Vision</b>
                        to accurately analyze bubbled responses from scantron sheets, achieving 100% accuracy and reducing manual grading effort by 95%.
                    </p>
                    <ul>
                        <li>Designed and implemented AI modules in <b>Python</b>, utilizing <b>OpenCV</b> for image preprocessing, <b>TensorFlow</b> and <b>PyTorch</b> for deep learning, and <b>Scikit-Learn</b> for model evaluation and optimization.</li>
                        <li>Optimized neural networks with advanced image preprocessing techniques, achieving 98% accuracy in image classification tasks using <b>CNNs</b>, ensuring precise bubble detection and response analysis.</li>
                        <li>Developed a <b>Transformer-based NLP</b> model for handwritten text analysis, improving text extraction accuracy by 85%, enabling efficient processing of handwritten responses.</li>
                        <li>Introduced <b>Agile</b> and <b>DevOps</b> methodologies, streamlining the CI/CD pipeline with GitHub Actions, increasing project completion speed by 30% and reducing manual deployment intervention by 70%.</li>
                        <li>Integrated the AI model into a real-time, user-friendly web application for educators, providing seamless access to grading results and reports.</li>
                    </ul>
                </div>

                <div className="project">
                    <h3>Predictive Maintenance with Anomaly Detection</h3>
                    <p>
                        Led the development of an AI-driven predictive maintenance system for industrial equipment, predicting failures with 85% accuracy, reducing downtime by 40%, and cutting maintenance costs by 25%.
                    </p>
                    <ul>
                        <li>Designed and implemented an end-to-end AI pipeline, covering data collection, preprocessing, model training, evaluation, and deployment, ensuring seamless integration with existing systems.</li>
                        <li>Utilized a variety of machine learning algorithms to predict equipment failures, allowing for proactive maintenance scheduling and improving overall operational efficiency.</li>
                        <li>Built a real-time anomaly detection system using <b>Python</b>, <b>Scikit-Learn</b>, and <b>PySpark</b>, efficiently processing large volumes of industrial data on <b>Azure Databricks</b>, providing immediate insights.</li>
                        <li>Optimized model performance through hyperparameter tuning and validation across multi-node environments, leveraging <b>GPU acceleration with CUDA</b>, reducing training time by 40%.</li>
                        <li>Developed scalable data pipelines to handle the vast influx of industrial data, ensuring accurate predictions and faster processing times.</li>
                        <li>Integrated <b>CI/CD pipelines</b>, <b>Docker</b>, and <b>Kubernetes</b> for automated deployment and management of the predictive models, ensuring reliable, scalable performance.</li>
                        <li>Deployed the solution on <b>Azure Machine Learning</b>, providing robust monitoring, scalability, and enhancing system uptime by 20%.</li>
                        <li>Collaborated closely with cross-functional teams to ensure smooth integration, aligning technical solutions with business objectives and maximizing overall system performance.</li>
                    </ul>
                </div>

                <div className="project">
                    <h3>Automated Warehouse Monitoring System Using Drones</h3>
                    <p>
                        Led the development of an AI-powered warehouse monitoring system using drones to automatically identify labels and key information from drone-captured frames, improving operational efficiency by 65% over 2.5 years.
                    </p>
                    <ul>
                        <li>Engineered machine learning models in <b>Python</b> for real-time object detection and classification, utilizing <b>TensorFlow</b>, <b>PyTorch</b>, and <b>Scikit-Learn</b> in a distributed <b>AWS</b> environment, reducing model training time by 30%.</li>
                        <li>Implemented state-of-the-art models like <b>ResNet</b> and <b>YOLO</b>, enhancing real-time object detection by 35% and providing accurate frame analysis from drone footage.</li>
                        <li>Optimized GPU-intensive tasks using <b>CUDA</b>, achieving a 40% increase in computational efficiency, enabling faster processing of large-scale data in multi-node environments.</li>
                        <li>Authored <b>REST APIs</b> and integrated them with <b>AWS Lambda</b>, facilitating scalable, real-time data processing and analytics, reducing integration time by 25%.</li>
                        <li>Developed robust feature extraction techniques, improving model accuracy by 20% and enhancing the overall predictive performance of the system.</li>
                        <li>Evaluated model performance using <b>accuracy, precision, recall, and F1-score</b> metrics, and conducted rigorous cross-validation, increasing system reliability by 25%.</li>
                        <li>Streamlined CI/CD pipelines using <b>Git, AWS CodePipeline, Docker, and Kubernetes</b>, ensuring smooth, scalable deployment processes in distributed environments.</li>
                        <li>Mastered the latest advancements in machine learning, experimenting with cutting-edge techniques like <b>Vision Transformers</b>, <b>RNNs</b>, and <b>LSTMs</b>, contributing to the continuous improvement of the system's capabilities.</li>
                        <li>Collaborated with cross-functional teams and actively participated in <b>Agile</b> and <b>DevOps</b> practices, aligning technical solutions with business objectives, and ensuring high-quality deliverables.</li>
                    </ul>
                </div>

                <div className="project">
                    <h3>End-User Sentiment Analysis</h3>
                    <p>
                        Developed a sophisticated sentiment analysis platform to assess customer feedback and reviews, utilizing advanced NLP techniques to derive actionable insights and improve decision-making.
                    </p>
                    <ul>
                        <li>Designed and implemented an NLP-based sentiment analysis system using <b>Python</b>, <b>NLTK</b>, and <b>Scikit-Learn</b>, achieving 92% accuracy in sentiment classification.</li>
                        <li>Applied preprocessing techniques such as tokenization, stop-word removal, and <b>TF-IDF vectorization</b> to improve the quality and relevance of textual data, enhancing model performance.</li>
                        <li>Conducted model validation and hyperparameter tuning to optimize the system for robustness and accuracy across diverse datasets, ensuring reliable sentiment detection.</li>
                        <li>Reduced manual analysis effort by integrating automated feedback categorization, speeding up response times and improving user satisfaction.</li>
                        <li>Collaborated with cross-functional teams to integrate the platform with business tools, providing real-time insights for customer feedback management.</li>
                    </ul>
                </div>

                <div className="project">
                    <h3>Attention-Based Deep Driving Model for Autonomous Vehicles</h3>
                    <p>
                        Re-engineered an advanced deep learning model that utilizes multi-view camera data for autonomous vehicle navigation, significantly improving navigation accuracy and decision-making.
                    </p>
                    <ul>
                        <li>Integrated data from front, rear, and side-view cameras, applying attention mechanisms to enhance the semantic understanding of environmental cues and navigation paths.</li>
                        <li>Designed and optimized the <b>Multi-View Attention (MVA)</b> module, boosting performance in vehicle steering and speed prediction by 20%, leading to smoother and safer driving behaviors.</li>
                        <li>Trained and validated the model using the <b>Drive360 dataset</b>, demonstrating superior performance in <b>Mean Square Error (MSE)</b> compared to baseline models.</li>
                        <li>Improved the model’s ability to process diverse environmental conditions, ensuring robustness in real-world autonomous navigation scenarios.</li>
                        <li>Collaborated with cross-functional teams to ensure seamless integration into the autonomous vehicle platform, aligning with system requirements and industry standards.</li>
                    </ul>
                </div>


                <div className="project">
                    <h3>Automatic License Plate Recognition</h3>
                    <p>
                        Designed and developed a high-performance system for the automatic detection and recognition of vehicle license plates in images, utilizing Python, OpenCV, YOLOv3, and Tesseract OCR to achieve superior accuracy and efficiency.
                    </p>
                    <ul>
                        <li>Integrated advanced <b>OpenCV</b> techniques for image preprocessing, including grayscale conversion, bilateral filtering, and edge detection, boosting detection accuracy by 25%.</li>
                        <li>Employed <b>YOLOv3</b> for real-time object detection of license plates, significantly improving detection speed and precision across various lighting and environmental conditions.</li>
                        <li>Leveraged <b>Tesseract OCR</b> for extracting alphanumeric characters from the detected license plates, achieving 98% accuracy in text recognition across diverse datasets.</li>
                        <li>Utilized <b>Pandas</b> for efficient data management, facilitating the organization and storage of extracted license plate information for future analysis and reporting.</li>
                        <li>Thoroughly tested and validated the system with a wide range of image datasets, ensuring robustness and reliability, with an overall improvement of 20% in recognition accuracy.</li>
                    </ul>
                </div>


                <div className="project">
                    <h3>Pi4Micronaut</h3>
                    <p>
                        Led a team of four in developing an Open-Source <b>Java</b> library for Raspberry Pi hardware interactions
                        using the <b>Micronaut</b> framework and PI4J library.
                    </p>
                    <ul>
                        <li>Managed technical aspects including issue creation, pull request evaluations, and GitHub codebase maintenance, ensuring high software quality.</li>
                        <li>Successfully released versions 1.0 and 1.1 of the library, adding support for 16 components.</li>
                        <li>Introduced <b>Agile</b> methodologies for efficient project management, ensuring timely completion of development sprints and alignment with client needs.</li>
                        <li>Streamlined the <b>CI/CD</b> pipeline using GitHub Actions, releasing the library to the <b>Maven Central Repository</b> and automating documentation publication to GitHub Pages.</li>
                        <li>Provided technical leadership and mentorship to team members, fostering a collaborative and innovative development environment.</li>
                    </ul>
                </div>

                <div className="project">
                    <h3>Line Following Differential Drive Robot</h3>
                    <p>
                        Developed a differential drive robot capable of following a predetermined path using <b>MATLAB</b>, <b>C++</b>, and <b>Arduino</b>.
                    </p>
                    <ul>
                        <li>Integrated infrared sensors and shaft encoders with an <b>ATMega328P</b> microcontroller on an Arduino for precise movement and path tracking.</li>
                        <li>Implemented a feature for mapping the robot's coordinates to world coordinates.</li>
                        <li>Achieved efficient path planning, navigation, and accurate real-world positioning.</li>
                        <li>Employed a <b>Kalman filter</b> for enhanced accuracy in robot localization and path tracking, ensuring robust and reliable navigation.</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Projects;
