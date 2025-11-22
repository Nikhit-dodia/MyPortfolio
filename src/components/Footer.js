import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <p style={styles.text}>
          ©{year} All rights reserved. Crafted with love & passion by Nikhit
          Dodia.
        </p>

        <div style={styles.socialWrap}>
          <p style={styles.connectText}>Connect with me | </p>

          <div style={styles.socials}>
            <a
              href="https://www.linkedin.com/in/nikhit-dodia-ab474a202/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://w7.pngwing.com/pngs/359/1013/png-transparent-internet-linkedln-media-social-social-media-social-media-solid-icon-thumbnail.png"
                alt="LinkedIn"
                style={styles.icon}
                className="footer-icon"
              />
            </a>

            <a
              href="https://in.pinterest.com/FenryrTheWolf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://w7.pngwing.com/pngs/986/505/png-transparent-button-computer-icons-theme-pinterest-text-trademark-pin-thumbnail.png"
                alt="Pinterest"
                style={styles.icon}
                className="footer-icon"
              />
            </a>

            <a
              href="https://www.behance.net/bece30035nikhit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://w7.pngwing.com/pngs/273/51/png-transparent-computer-icons-logo-behance-others-text-rectangle-logo-thumbnail.png"
                alt="Behance"
                style={styles.icon}
                className="footer-icon"
              />
            </a>

            <a
              href="https://github.com/Nikhit-dodia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://w7.pngwing.com/pngs/828/816/png-transparent-github-computer-icons-gitlab-github-white-cat-like-mammal-carnivoran-thumbnail.png"
                alt="Github"
                style={styles.icon}
                className="footer-icon"
              />
            </a>

            <a
              href="https://www.instagram.com/doodlewithnikhit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://w7.pngwing.com/pngs/815/101/png-transparent-www-mevrouwpak-nl-advertising-graphic-design-instagram-instagram-logo-business-advertising-thumbnail.png"
                alt="Instagram"
                style={styles.icon}
                className="footer-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: '100%',
    padding: '40px 10%',
    background: 'white',
    marginTop: '60px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  text: {
    fontWeight: 600,
    fontSize: '15px',
  },
  socialWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  },
  connectText: {
    fontWeight: 700,
    fontSize: '15px',
  },
  socials: {
    display: 'flex',
    gap: '25px',
  },
  icon: {
    width: '28px',
    height: '28px',

    objectFit: 'contain',
    transition: 'transform 0.25s ease',
  },
};
