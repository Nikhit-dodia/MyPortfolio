import React from 'react';
import '../Projects.css';
import { useState } from 'react';

 

export default function Projects() {
  
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
    document.body.style.overflow = "hidden"; // lock scroll
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // unlock scroll
  };
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-subtitle">
        A curated selection of my personal car concepts, commissioned work, and
        art explorations — crafted with precision, imagination, and passion.
      </p>

      {/* CAR DESIGNS */}
      <div className="project-block">
        <h3 className="project-heading">Car Designs</h3>
        <div className="projects-grid">
          <div className="car-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/89b11a238013117.690c2adcefe20.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/89b11a238013117.690c2adcefe20.png"
              alt="Car Design 1"
            />
          </div>

          <div className="car-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/80d4d4236997105.68f7bf9c50c90.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/80d4d4236997105.68f7bf9c50c90.png"
              alt="Car Design 2"
            />
          </div>

          <div className="car-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/1413e6226134917.68297b4978c2d.jpg")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/1413e6226134917.68297b4978c2d.jpg"
              alt="Car Design 3"
            />
          </div>
        </div>
      </div>

    {/* Other illustrations*/}
    <div className="project-block">
        <h3 className="project-heading">Graphic Designs</h3>
        <div className="projects-grid">
          <div className="car-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/71473e239525695.692b28c7ae4ab.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/71473e239525695.692b28c7ae4ab.png"
              alt="graphic Design 1"
            />
          </div>

          <div className="car-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6546c0239525695.692b28c7ad8aa.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/6546c0239525695.692b28c7ad8aa.png"
              alt="graphic Design 2"
            />
          </div>

          <div className="car-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cafeac239525695.692b28c7adec5.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cafeac239525695.692b28c7adec5.png"
              alt="graphic Design 3"
            />
          </div>
        </div>
      </div>


      {/* CLIENT PROJECTS */}
      <div className="project-block">
        <h3 className="project-heading">Client Projects</h3>
        <div className="projects-grid">
          <div className="desc-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/78989e239056825.6920f8d768df9.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/78989e239056825.6920f8d768df9.png"
              alt="Client Project 1"
            />
            <div className="desc-text">
              Brand Logo design for a tech start-up called The Tech Shine.
            </div>
          </div>

          <div className="desc-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a8323e239069589.6921751b3770b.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a8323e239069589.6921751b3770b.png"
              alt="Client Project 2"
            />
            <div className="desc-text">
              Brand Logo re-design for a popular dance class/club named UGDC
              dance group.
            </div>
          </div>

          <div className="desc-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a33d82239069589.6921751b38e76.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a33d82239069589.6921751b38e76.png"
              alt="Client Project 3"
            />
            <div className="desc-text">
              Youtube Thumbnail design for a travel vlogger exploring Heritages.
            </div>
          </div>
        </div>
      </div>

      {/* ART ILLUSTRATIONS */}
      <div className="project-block">
        <h3 className="project-heading">Art & Illustrations</h3>
        <div className="projects-grid">
          <div className="project-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f827d8239069589.6921751b39613.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f827d8239069589.6921751b39613.png"
              alt="Illustration 1"
            />
          </div>

          <div className="project-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8b4f8a239069589.6921751b3827b.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8b4f8a239069589.6921751b3827b.png"
              alt="Illustration 2"
            />
          </div>

          <div className="project-card" onClick={() => openImage("https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/4e03a7239069589.6921751b3894b.png")}>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/4e03a7239069589.6921751b3894b.png"
              alt="Illustration 3"
            />
          </div>
        </div>
      </div>

       {/* POPUP MODAL */}
       {selectedImage && (
        <div className="modal" onClick={closeImage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Preview" className="modal-img" draggable="false" />
            <button className="close-btn" onClick={closeImage}>×</button>
          </div>
        </div>
      )}

    </section>
  );
}
