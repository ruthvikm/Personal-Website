// src/index.js (or a separate JS file)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Smooth scrolling for all links with the "smoothscroll" class
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a.smoothscroll').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

ReactDOM.render(<App />, document.getElementById('root'));
