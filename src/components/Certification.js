import React from 'react';
import '../Certification.css';

export default function Certification() {
  return (
    <section className="card">
      <h2>Certifications</h2>

      <div className="cert-container">
        <div className="cert-row">
          <img
            src="https://w7.pngwing.com/pngs/193/685/png-transparent-udemy-new-logo-tech-companies-thumbnail.png"
            alt="certificate brand"
            className="cert-logo"
          />
          <span>
            Automotive Design 101 | Design, Sketch, Draw Cars Like a Pro
          </span>
        </div>

        <div className="cert-row">
          <img
            src="https://w7.pngwing.com/pngs/193/685/png-transparent-udemy-new-logo-tech-companies-thumbnail.png"
            alt="certificate brand"
            className="cert-logo"
          />
          <span>
            Automotive Engineering: Automobile Fundamentals & Advanced
          </span>
        </div>

        <div className="cert-row">
          <img
            src="https://w7.pngwing.com/pngs/193/685/png-transparent-udemy-new-logo-tech-companies-thumbnail.png"
            alt="certificate brand"
            className="cert-logo"
          />
          <span>Introduction to Automotive Product Design & Development</span>
        </div>

        <div className="cert-row">
          <span>2D Designing Fundamentals</span>
        </div>
      </div>
    </section>
  );
}
