import React, { useState } from 'react';
import '../index.css';
import pic1 from '../assets/MyPics/Workshop_ruthvik.jpeg';
import pic2 from '../assets/MyPics/Workshop_ruthvik_2.jpeg';
import pic3 from '../assets/MyPics/Workshop_ruthvik_3.jpeg';
import pic4 from '../assets/MyPics/pi4micronaut_team_1.jpg';
import pic5 from '../assets/MyPics/pi4micronaut_team_working.jpg';

const Pictures = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsEnlarged(true);
  };

  const handleCloseClick = () => {
    setIsEnlarged(false);
    setTimeout(() => setSelectedImage(null), 500); // Adjust timeout to match CSS transition duration
  };

  return (
    <main>
      <section className="pictures">
        <h2>Gallery</h2>
        <div className="photo-grid">
          {[pic1, pic2, pic3, pic4, pic5].map((pic, index) => (
            <div className="photo-item" key={index} onClick={() => handleImageClick(pic)}>
              <img src={pic} alt={`Pic ${index + 1}`} className="photo" />
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className={`modal-overlay ${isEnlarged ? 'active' : ''}`} onClick={handleCloseClick}>
            <div className={`modal ${isEnlarged ? 'active' : ''}`}>
              <img src={selectedImage} alt="Full View" className="modal-image" />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Pictures;
