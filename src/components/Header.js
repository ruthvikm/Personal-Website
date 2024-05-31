import React, { useEffect, useState, useCallback } from 'react';
import '../index.css';

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);

        // Collapse the menu if it's open
        if (menuOpen) {
            setAnimationClass('close');
            setTimeout(() => {
                setMenuOpen(false);
                setAnimationClass('');
            }, 300); // Match the CSS transition duration
        }
    }, [prevScrollPos, menuOpen]);

    const toggleMenu = () => {
        if (menuOpen) {
            setAnimationClass('close');
            setTimeout(() => {
                setMenuOpen(false);
                setAnimationClass('');
            }, 25); // Match the CSS transition duration
        } else {
            setMenuOpen(true);
            setAnimationClass('active');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <header className={`header ${visible ? '' : 'hidden'} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="top-bar">
                <div className="logo">
                    {/* Logo content */}
                </div>
                <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav id="main-nav-wrap" className={animationClass}>
                    <ul className={`main-navigation ${animationClass}`}>
                        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="./assets/resume.pdf" download="resume.pdf" onClick={toggleMenu}>Resume</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
