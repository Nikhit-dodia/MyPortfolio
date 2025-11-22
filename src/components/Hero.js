import React from 'react';

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.wrap}>
        <img src="/bg.png" alt="bgimg" className="bg" style={styles.bg} />

        <h1 style={styles.title}>Automotive & Concept Designer</h1>
        <p style={styles.subtitle}>
          Specializing in car design, 2D/3D visualization & raw concept
          sketching.
        </p>
      </div>

      <div style={styles.imageWrapper}>
        <img
          src="/hero.png"
          alt="hero visual"
          style={styles.image}
          className="float"
        />
      </div>
    </section>
  );
}

const styles = {
  hero: {
    padding: '120px 10%',
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
  title: {
    fontSize: '42px',
    fontWeight: 800,
  },
  subtitle: {
    fontSize: '20px',
    maxWidth: '600px',
  },
  imageWrapper: {
    flex: 1,
    minWidth: '320px', // ← THIS prevents image from getting pushed below
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    position: 'absolute',
    maxWidth: '400px',
    objectFit: 'contain',
  },

  wrap: {
    position: 'relative', // enables layering
    zIndex: 2,
  },
  bg: {
    position: 'absolute',
    top: '-200px', // move up/down for aesthetic placement
    left: '-170px', // shift left/right for style
    width: '550px', // make it slightly bigger for effect
    opacity: 0.8, // reduce so the text is readable
    zIndex: -1, // behind the text
    pointerEvents: 'none',
  },
};
