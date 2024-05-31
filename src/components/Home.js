import React from 'react';
import '../index.css';
import { motion } from 'framer-motion';


const Home = () => {
    return (
        <section id="home">
            <div className="intro-content">
                <div className="row">
                    <div className="col-twelve">
                        <motion.h2
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Hello World !!!
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <i>I'm Ruthvik Mannem</i>
                        </motion.h1>
                        
                        <motion.p
                            className="intro-position"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <span>Machine Learning Engineer</span>
                            <br/>
                            <span>Software Developer</span>
                        </motion.p>
                        
                        <motion.a
                            className="button stroke smoothscroll"
                            href="#about"
                            title=""
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >More About Me
                        </motion.a>
                    </div>
                </div>
            </div>
            <motion.ul
                className="intro-social"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
            >
            </motion.ul>
        </section>
    );
}

export default Home;
